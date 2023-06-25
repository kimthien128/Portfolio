const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header');

// chuyển đổi 2 tab projects UIUX và Code
var switchProjectBtn = $('input[name="switch-project"]');
swithProject();
switchProjectBtn.onclick = function(){
    swithProject();
}

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


window.onresize = function (){
    openCloseMenu();
    header.style.height = null;

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
// project
var projectTitles = $$('.project-title__item');
var projectContents = $$('.projectWrap');
var projectTitleActive = $('.project-title__item--active');
var projectTitleLine = $('.project-title__line');
projectTitleLine.style.left = projectTitleActive.offsetLeft + 'px';
projectTitleLine.style.width = projectTitleActive.offsetWidth + 'px';

projectTitles.forEach(function (title, index) {
    let projectContent = projectContents[index];
    title.onclick = function () {
        $('.projectWrap.projectWrap--active').classList.remove('projectWrap--active');
        projectContent.classList.add('projectWrap--active');

        $('.project-title__item.project-title__item--active').classList.remove('project-title__item--active');
        this.classList.add('project-title__item--active');

        projectTitleLine.style.left = this.offsetLeft + 'px';
        projectTitleLine.style.width = this.offsetWidth + 'px';
    };
});

function swithProject (){
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