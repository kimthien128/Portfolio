// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    fixHeader();
}

let header = document.getElementById('header');
var sticky = header.offsetTop;

function fixHeader(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

let scrollButton = document.getElementById("scrollToTop");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
}

//------Open Close Menu
let menuBtn = document.getElementById('menuIcon');
let headerHeight = header.clientHeight;

menuBtn.onclick = function(){   
    let isClose = header.clientHeight === headerHeight;
    if (isClose){
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//------Close Menu when click item
let menuItems = document.querySelectorAll(`#header ul li a`);
for (let i = 0; i < menuItems.length; i++){
    let menuItem = menuItems[i];
    menuItem.onclick = function(){
        header.style.height = null;
    }
}

// PORTFOLIO
const portfolioTitles = document.querySelectorAll('.portfolio-title__item');
const portfolioContents = document.querySelectorAll('.portfolioWrap');

const portfolioTitleActive = document.querySelector('.portfolio-title__item--active');
let portfolioTitleLine = document.querySelector('.portfolio-title__line');
portfolioTitleLine.style.left = portfolioTitleActive.offsetLeft + 'px';
portfolioTitleLine.style.width = portfolioTitleActive.offsetWidth + 'px';

portfolioTitles.forEach(function (title, index) {
    let portfolioContent = portfolioContents[index];
    title.onclick = function () {
        document.querySelector('.portfolioWrap.portfolioWrap--active').classList.remove('portfolioWrap--active');
        portfolioContent.classList.add('portfolioWrap--active');

        document.querySelector('.portfolio-title__item.portfolio-title__item--active').classList.remove('portfolio-title__item--active');
        this.classList.add('portfolio-title__item--active');

        portfolioTitleLine.style.left = this.offsetLeft + 'px';
        portfolioTitleLine.style.width = this.offsetWidth + 'px';
    };
});