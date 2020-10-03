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