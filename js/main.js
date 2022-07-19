// 이벤트 슬라이드
function tap_slide(){
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
}

tap_slide();

// 롤링 배너
$(function(){
    var banner_left = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;
    $('.test li').each(function(){
        $(this).css('left',banner_left);
        banner_left += $(this).width()+parseInt($(this).css("margin-right"));
        $(this).attr('class','content'+(++imgCnt));
    });
    last = imgCnt;
    rollingStart();
    function rollingStart(){
        interval = setInterval(function(){
            $('.viewport li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });
            var first_content = $('.content' + first);
            var last_content = $('.content' + last);
            if(first_content.position().left < '-'+($(first_content).width())){
                first_content.css('left', last_content.position().left+ last_content.width()+40);
                first++;
                last++;
                if(last>imgCnt){
                    last = 1;
                }
                if(first>imgCnt){
                    first = 1;
                }
            }
        },20);
    }
})
   



// 마우스오버 & 클릭

$('.tap_menu li').on('mouseover',function(){
    var v_port = $('<div>').addClass('viewport');
    var idx = $(this).index();
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('.visual_view').unwrap(".viewport").css('visibility','hidden');
    $('.visual_view').eq(idx).wrap(v_port).css('visibility','visible');
    var banner_left = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;
    $('.viewport li').each(function(){
        $(this).css('left',banner_left);
        banner_left += $(this).width()+parseInt($(this).css("margin-right"));
        $(this).attr('class','content'+(++imgCnt));
    });
    last = imgCnt;
})

cate.onclick = function(e){
    var cg_li = document.querySelectorAll('.cg_list li');
    var items = document.querySelectorAll('.it');
    var idx;
    for(var i = 0; i < cg_li.length; i++){
        cg_li[i].classList.remove('on');
        e.target.classList.add('on');
        cg_li[i].setAttribute('data-index',i);
        items[i].setAttribute('data-index',i);
        idx = items[i].getAttribute('data-index');
        if(e.target.getAttribute('data-index') == idx){
            items[i].style.display = 'block';
        } else if(e.target.id == 'cate'){
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

const txt_it = document.querySelector('.txt_item');
var item_li = txt_it.getElementsByTagName('ul');
for(var i=0;i<item_li.length;i++){
    item_li[i].setAttribute('id','id'+i);
    const ids = document.getElementById('id'+i);
    ids.onclick = function(e){
        $('.it li a').removeClass('on');
        e.target.classList.add('on');
    }
}