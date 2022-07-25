const bars = document.querySelector("#bars");
const bars02 = document.querySelector("#bars02");
const utilities = document.querySelector(".right-content");
const mainMenu = document.querySelector(".main-menu");

bars.addEventListener('click', function(e){
    if(e.target.classList.contains('bars-active')){
        e.target.classList.remove('bars-active');
    }
    else{
        e.target.classList.add('bars-active');
    }
    utilities.classList.toggle('right-content-active');
});

bars02.addEventListener('click', function(e){
    if(e.target.classList.contains('bars-active')){
        e.target.classList.remove('bars-active');
    }
    else{
        e.target.classList.add('bars-active');
    }
    utilities.classList.toggle('right-content-active');
    mainMenu.classList.toggle('main-menu-active');
});