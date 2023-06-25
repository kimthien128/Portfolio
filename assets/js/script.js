const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header');
const switchProjectBtn = $('input[name="switch-project"]');
const scrollToTopBtn = $('#scrollToTop');
const menuBtn = $('#menuIcon');
const sendBtn = $('.btn-send');


window.addEventListener("DOMContentLoaded", (event) => {
    switchProject();
});

// chuyển đổi 2 tab projects UIUX và Code
switchProjectBtn.onclick = function(){
    switchProject();
}
menuBtn.onclick = function(e){
    openCloseMenu();
    e.stopPropagation();
}
sendBtn.onclick = function(){
    alert('Xin lỗi! Chức năng này đang trong quá trình hoàn thiện');
}
// -----Close Menu when click outside header -----
window.onclick = function (e){
    if(e.target != menuBtn){
        header.classList.remove('OpenMenu');
    }
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    fixHeader();
}
// nhấn nút scroll to top
scrollToTopBtn.onclick = function (){
    topFunction();
}

function getParent(curElement, selector){
    while(curElement.parentElement){
        if(curElement.parentElement.matches(selector)){
            return curElement.parentElement;
        }
        curElement = curElement.parentElement;
    }
}
function openCloseMenu(){
    let header = getParent(menuBtn, '#header');
    header.classList.toggle('OpenMenu');
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