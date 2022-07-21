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
    var interval;
    $('.test li').each(function(){
        $(this).css('left',banner_left);
        banner_left += $(this).width()+parseInt($(this).css("margin-right"));
    });
    rollingStart();
    function rollingStart(){
        interval = setInterval(function(){
            $('.viewport li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });
            for(var i=0; i < $('.viewport li').length;i++){
                if($('.viewport li').eq(i).position().left < -+($('.viewport li').eq(i).width())){
                    $('.viewport li').eq(i).css('left', $('.viewport li').eq(i-1).position().left+($('.viewport li:last').width()+40));
                }
            }    
        },20);
    }
});
   


// 마우스오버 & 클릭
$('.guide li').on('mouseover',function(){
    $(this).find('span').addClass('on')
    $(this).siblings().find('span').removeClass('on');
    var ii = $(this).index();
    $('.event_li').eq(ii).addClass('on');
    $('.event_li').eq(ii).siblings().removeClass('on');
})

$('.tap_menu li').on('mouseover',function(){
    var v_port = $('<div>').addClass('viewport');
    var idx = $(this).index();
    $('.event_li').removeClass('on');
    $('.guide li').find('span').removeClass('on');
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('.visual_view').unwrap(".viewport").css('visibility','hidden');
    $('.visual_view').eq(idx).wrap(v_port).css('visibility','visible');
    var banner_left = 0;
    $('.viewport li').each(function(){
        $(this).css('left',banner_left);
        banner_left += $(this).width()+parseInt($(this).css("margin-right"));
    });
})

    // 차트에 인덱스 부여
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
            $('.it li a').removeClass('on');
            items[i].children[0].children[0].classList.add('on');
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

// 작가 슬라이드
$(function(){
    var writers = {
        name:['정재승','백희나','김미경','유발하라리','이선재','김중규','민준호','이동기','문동균','고혜원','신영식','말콤글래드웰','정세랑','김연수'],
        book:['열두 발자국','알사탕','김미경의 리부트','사피엔스','국어','행정학','사회','영어','한국사','국어','한국사','타인의 해석','시선으로 부터','일곱 해의 마지막'],
        res : function(a){
            return '<span><strong>'+this.name[a]+'</strong></span>'+'<span>'+this.book[a]+'</span>';
        }
    }
    for(let i = 0 ; i < $('.wrt').length;i++){
        $('.wrt').eq(i).find('a').append("<img src='"+'img/writer'+i+'.png'+"'>");
        $('.wrt').eq(i).append(writers.res(i));
    }
    var banner_left2 = 0;
    $('.writer_slide li').each(function(){
        $(this).css('left',banner_left2);
        banner_left2 += $(this).width()+parseInt($(this).css("margin-right"));
    });
    rollingStart2();
    function rollingStart2(){
        interval = setInterval(function(){
            $('.writer_slide li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });
            for(var i=0; i < $('.writer_slide li').length;i++){
                if($('.writer_slide li').eq(i).position().left < -+($('.writer_slide li').eq(i).width())){
                    $('.writer_slide li').eq(i).css('left', $('.writer_slide li').eq(i-1).position().left+($('.writer_slide li:last').width()+15));
                }
            }    
        },20);
    }
})

// 배너 이벤트
$(function(){
    $('.banner_btn .next').click(function(){
        slideBanner();
    })
    $('.banner_btn .prev').click(function(){
        $('.banner_content li:last').prependTo('.banner_content');
        $('.banner_content').css({marginLeft:-100+'%'});
        $('.banner_content').stop().animate({marginLeft:0})
    })
    var set_banner = setInterval(slideBanner,5000);
    function slideBanner(){
        $('.banner_content').stop().animate({marginLeft:-100+'%'},function(){
            $('.banner_content li:first').appendTo('.banner_content');
            $('.banner_content').css({marginLeft:0});
        })
    }
    $('.banner_btn').on('mouseover',function(){
        clearInterval(set_banner);
    });
    $('.banner_btn').on('mouseleave',function(){
        set_banner = setInterval(slideBanner,5000);
    })
})