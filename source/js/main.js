jQuery( document ).ready(function( $ ) {

    //мобильное меню
    const pageBody = document.querySelector('.page');
    const mainMenu = document.querySelector('.js-menu');
    const mainMenuOpener = document.querySelector('.js-menuopener');

    const mobileMenuOpen = function(){
        pageBody.classList.toggle('fixed');
        mainMenuOpener.classList.toggle('open');
        mainMenu.classList.toggle('open')
    };
    const mobileMenuClose = function(){
        pageBody.classList.remove('fixed');
        mainMenuOpener.classList.remove('open');
        mainMenu.classList.remove('open')
    };
    mainMenuOpener.addEventListener('click', event => {
        mobileMenuOpen();
    });

    mainMenu.addEventListener('click', function(e) {
        if(!e.target.matches('.js-menu')) {
            e.stopPropagation() }
        if (e.target.matches('.open')) {
            mobileMenuClose();
        }
    });

    window.onresize = function() {
        if (mainMenu.classList.contains('open')) mobileMenuClose()
    };

    //mobile searchform
    const searchButton = document.querySelector('.js-search-button');
    const searchBlock = document.querySelector('.js-searchform');

    const mobileSearchOpen = function(){
        pageBody.classList.toggle('fixed');
        searchBlock.classList.toggle('open')
    };
    const mobileSearchClose = function(){
        pageBody.classList.remove('fixed');
        searchBlock.classList.remove('open')
    };

    searchButton.addEventListener('click', event => {
        mobileSearchOpen()
    });

    searchBlock.addEventListener('click', function(e) {
        if(!e.target.matches('.js-searchform')) {
            e.stopPropagation()
        }
        if (e.target.matches('.open')) {
            mobileSearchClose()
        }
    });

    window.onresize = function() {
        if (mainMenu.classList.contains('open')) mobileSearchClose()
    };

    //инициируем селект2:
    $('.js-select2').select2({
        minimumResultsForSearch: Infinity //hide search field
    });

    //слайдер продуктов js-products-row
    $('.js-products-row').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="arrow">&larr;</span><span class="visually-hidden">Предыдущий</span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="arrow">&rarr;</span><span class="visually-hidden">Следующий</span></button>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });

    //слайдер продуктов js-brands-row
    $('.js-brands-row').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="arrow">&larr;</span><span class="visually-hidden">Предыдущий</span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="arrow">&rarr;</span><span class="visually-hidden">Следующий</span></button>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 6,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //слайдер продуктов js-pop-categories-row
    $('.js-pop-categories-row').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 991,
                settings: "unslick"
            }
        ]
    });

    //слайдер для кого js-for-whomes-row
    $('.js-for-whomes-row').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 991,
                settings: "unslick"
            }
        ]
    });

    //слайдер новинки
    $('.js-products-new-row').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="arrow">&larr;</span><span class="visually-hidden">Предыдущий</span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="arrow">&rarr;</span><span class="visually-hidden">Следующий</span></button>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 2,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rows: 2,
                }
            }
        ]
    });


    //футер меню
    const footerSwitchers = document.querySelectorAll('.js-footer-switcher');
    footerSwitchers.forEach(item => {
        item.addEventListener('click', event => {
            // event.target.classList.add('open')

            if ( event.target.matches('.open') ){
                event.target.classList.remove('open')
            } else {
                footerSwitchers.forEach(item => {
                    item.classList.remove('open');
                });
                event.target.classList.add('open')
            }

        })
    });

});