var next1 = document.getElementById('next1');
var prev1 = document.getElementById('prev1');
var guide = document.querySelector('.guide_wrap');
var g_slide = document.querySelectorAll('.guide_wrap li');
var g_width = g_slide[0].offsetWidth;
var i = 0;
function slideNext(){
    if(i < g_slide.length-5){
        i++;
        console.log(i);
        guide.style.marginLeft = -(g_width * i) + 'px';
    }
    if(i == g_slide.length-5){
        i = g_slide.length-5;
    }
}
function slidePrev(){
    if(i >= 1){
        i--;
        console.log(i);
        guide.style.marginLeft = -(g_width * i) + 'px';
    }
    if(i <= 0){
        i = 0;
    }
}
next1.addEventListener('click',slideNext);
prev1.addEventListener('click',slidePrev);