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

    //слайдер покупатели в халатах js-customers-photo-grid
    $('.js-customers-photo-grid').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        mobileFirst: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
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

    //слайдер изображений товара
    $('.js-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-nav-slider'
    });
    $('.js-nav-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-main-slider',
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow-vertical slick-arrow-vertical--prev"><span class="visually-hidden">Предыдущий</span></button>',
        nextArrow: '<button type="button" class="slick-arrow-vertical slick-arrow-vertical--next"><span class="visually-hidden">Следующий</span></button>',
        dots: false,
        focusOnSelect: true,
        vertical: true
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

    //фильтр в каталоге переключение на мобилке
    const filterButton = document.querySelector('.js-filter-opener');
    const filterBlock = document.querySelector('.js-filter-open');
    const filterCloseButton = document.querySelector('.js-filter-close');
    //соритровка в каталоге переключения на мобилке js-sorter-opener
    const sorterButton = document.querySelector('.js-sorter-opener');
    const sorterBlock = document.querySelector('.js-sort-form');
    const sorterCloseButton = document.querySelector('.js-sorter-close');

    const filterOpen = function(){
        filterButton.classList.toggle('active')
        filterBlock.classList.toggle('open')
        sorterBlock.classList.remove('open')

    };
    const filterClose = function(){
        filterBlock.classList.remove('open')
        filterButton.classList.remove('active')
    };
    const sorterOpen = function(){
        sorterButton.classList.toggle('active')
        sorterBlock.classList.toggle('open')
        filterBlock.classList.remove('open')

    };
    const sorterClose = function(){
        sorterBlock.classList.remove('open')
        sorterButton.classList.remove('active')
    };

    if(filterButton || sorterButton ){
        filterButton.addEventListener('click', event => {
            filterOpen()
        });

        filterCloseButton.addEventListener('click', event => {
            filterClose()
        });

        sorterButton.addEventListener('click', event => {
            sorterOpen()
        });

        sorterCloseButton.addEventListener('click', event => {
            sorterClose()
        });
    }

    // кнопки + и - на кол-ве товара, в форме товара
    const amountWrapper = $('.js-amount');
    if (amountWrapper){

        $(function() {
            amountWrapper.prepend('<button type="button" class="amount__btn amount__btn--minus" aria-hidden="true"></button>');
            amountWrapper.append('<button type="button" class="amount__btn amount__btn--plus" aria-hidden="true"></button>');

            $(".amount__btn").on("click", function() {
                const $button = $(this);
                let oldValue = $button.parent().find('.amount__input').val();
                let newVal = 1;
                if ($button.hasClass( 'amount__btn--plus' )) {

                    newVal = parseFloat(oldValue) + 1;
                } else {

                    if (oldValue > 1) {
                        newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 1;
                    }
                }
                $button.parent().find(".amount__input").val(newVal);
            });
        });
    }




    //блок ссылок на субкатегории в каталоге
    const subcategoriesField = document.querySelector('.js-subcategories-field');
    const subcategoriesFieldCloseBtn = document.querySelector('.js-subcategories-field-close');
    const subcategoriesFieldOpenBtn = document.querySelector('.js-subcategories-field-open');

    if (subcategoriesField){
        subcategoriesFieldOpenBtn.addEventListener('click', event => {
            subcategoriesField.classList.add('open');
        });

        subcategoriesFieldCloseBtn.addEventListener('click', evt => {
            subcategoriesField.classList.remove('open');
        });
    }

});