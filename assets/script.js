const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    fixHeader();
}

function fixHeader(){
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function scrollFunction() {
    let scrollButton = $("#scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

if (window.innerWidth < 739){ //khi kich thuoc man hinh o dang Mobile moi chay
    openCloseMenu();
}
//------Open Close Menu
function openCloseMenu(){
    let headerHeight = header.clientHeight;
    let menuBtn = $('#menuIcon');
    let menuItems = $$(`#header ul li`);
    // Open Menu when click btn
    menuBtn.onclick = function(e){   
        let isClose = header.clientHeight === headerHeight;
        if (isClose){
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
        e.stopPropagation();
    }
    // -----Close Menu when click outside header -----
    window.onclick = function (e){
        if(e.target != menuItems){
            header.style.height = null;
        }
    }

    //------Close Menu when click inside item -----
    for (let i = 0; i < menuItems.length; i++){
        let menuItem = menuItems[i];
        menuItem.onclick = function(){
            header.style.height = null;
        }
    }
}
// PORTFOLIO
const portfolioTitles = $$('.portfolio-title__item');
const portfolioContents = $$('.portfolioWrap');
const portfolioTitleActive = $('.portfolio-title__item--active');
const portfolioTitleLine = $('.portfolio-title__line');
portfolioTitleLine.style.left = portfolioTitleActive.offsetLeft + 'px';
portfolioTitleLine.style.width = portfolioTitleActive.offsetWidth + 'px';

portfolioTitles.forEach(function (title, index) {
    let portfolioContent = portfolioContents[index];
    title.onclick = function () {
        $('.portfolioWrap.portfolioWrap--active').classList.remove('portfolioWrap--active');
        portfolioContent.classList.add('portfolioWrap--active');

        $('.portfolio-title__item.portfolio-title__item--active').classList.remove('portfolio-title__item--active');
        this.classList.add('portfolio-title__item--active');

        portfolioTitleLine.style.left = this.offsetLeft + 'px';
        portfolioTitleLine.style.width = this.offsetWidth + 'px';
    };
});