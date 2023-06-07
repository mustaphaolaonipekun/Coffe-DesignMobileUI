let menu =document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

coffeeSlider = (slide)=>{
document.querySelector('.main').src =slide;    
};

changeColor =(color)=>{
    const change  = document.querySelector('');
    change.style.background=color;
};