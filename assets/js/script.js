const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header');
const switchProjectBtn = $('input[name="switch-project"]');
const scrollToTopBtn = $('#scrollToTop');

window.addEventListener("DOMContentLoaded", (event) => {
    switchProject();
});

// chuyển đổi 2 tab projects UIUX và Code
switchProjectBtn.onclick = function(){
    switchProject();
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    fixHeader();
}
// Khi kích thước màn hình thay đổi thì chạy hàm này để set lại giá trị chiều cao header
window.onresize = function (){
    openCloseMenu();
    header.style.height = null;
}
// nhấn nút scroll to top
scrollToTopBtn.onclick = function (){
    topFunction();
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

function switchProject (){
    let uiuxProject = $('.project-uiux');
    let codeProject = $('.project-code');
    if(switchProjectBtn.checked){
        uiuxProject.style.display = 'none';
        codeProject.style.display = 'flex';
    } else {
        uiuxProject.style.display = 'flex';
        codeProject.style.display = 'none';
    }
}