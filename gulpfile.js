const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const sassGlob = require('gulp-sass-glob');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const htmlnano = require('gulp-htmlnano');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const uglify = require("gulp-uglify-es").default;;
const del = require("del");

//fonts convert from ttf to woff and woff2

const woff = () => {
    return gulp.src(['source/fonts/*.ttf'])
        .pipe(ttf2woff())
        .pipe(gulp.dest('source/fonts/'));
};
exports.woff = woff;

const woff2 = () => {
    return gulp.src(['source/fonts/*.ttf'])
        .pipe(ttf2woff2())
        .pipe(gulp.dest('source/fonts/'));
};
exports.woff2 = woff2;

const fonts = gulp.series(woff, woff2);
exports.fonts = fonts;

// Styles
const styles = () => {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        // .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("./build/css"))
        .pipe(sync.stream());
};
exports.styles = styles;

// minification js
const scripts = () => {
    return gulp.src("source/js/*.js")
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/js"))
        .pipe(sync.stream());
};
exports.scripts = scripts;

// HTML
const htmlnanoOptions = {
    collapseWhitespace: "conservative",
    // collapseAttributeWhitespace: true,
    removeComments: "safe"
};

const html = () => {
    return gulp.src("source/*.html")
        .pipe(posthtml([
            include(),
            ]))
        // .pipe(htmlnano(htmlnanoOptions))
        .pipe(gulp.dest("./build"))
        .pipe(sync.stream());
};
exports.html = html;

//webp
const webpPics = () => {
    return gulp.src("source/img/**/*.{png,jpg}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("build/img"))
};
exports.webpPics = webpPics;
//Imagemin
const img = () => {
    return gulp.src("source/img/**/*.{jpg,png,svg}", "!source/img/sprite/*")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('./build/img'));
};
exports.img = img;


// Sprite
const sprite = () => {
    return gulp.src("source/img/sprite**/icon-*.svg")
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: false}
                ]
            })
        ]))
        .pipe(svgstore())
        .pipe(rename("sprite.svg"))

        .pipe(gulp.dest("build/img"));
};

exports.sprite = sprite;
// Copy
const copy = () => {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2,ttf}",
        "source/*.ico"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"));
};
exports.copy = copy;
// Clean
const clean = () => {
    return del("build");
};
exports.clean = clean;
// Server
const server = done => {
    sync.init({
        server: {
            baseDir: './build'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}
exports.server = server;
// Watcher
const watcher = () => {
    gulp.watch("source/sass/**/*.scss", gulp.series(styles));
    gulp.watch("source/**/*.html", gulp.series(html));
    gulp.watch("source/js/**/*.js", gulp.series(scripts));
};

// all images
const images = gulp.series( webpPics, img);
exports.images = images;

// Build
const build = gulp.series(clean, copy, styles, scripts, webpPics, img, sprite, html);
exports.build = build;

// Start
// exports.start = gulp.series(build, server, watcher);
const develop = gulp.series(build, server, watcher);

exports.default = develop;

