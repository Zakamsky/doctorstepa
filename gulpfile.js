const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
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
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("./build/css"))
        .pipe(sync.stream());
};
exports.styles = styles;
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
const images = () => {
    return gulp.src("source/img/**/*.{jpg,png,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('./build/img'));
};
exports.images = images;
// Sprite
const sprite = () => {
    return gulp.src("source/img/**/icon-*.svg")
        .pipe(svgstore())
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
};

exports.sprite = sprite;
// Copy
const copy = () => {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/js/**",
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
}
// Build
const build = gulp.series(clean, copy, styles, webpPics, images, sprite, html);
exports.build = build;
// Start
// exports.start = gulp.series(build, server, watcher);
const develop = gulp.series(build, server, watcher);

exports.default = develop;

