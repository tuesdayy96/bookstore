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
rollings();

// 롤링 배너
function rollings(){
    var banner_left = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;
    $(function(){
        $('.test li').each(function(idx){
            $(this).css('left',banner_left);
            banner_left += $(this).width()+parseInt($(this).css("margin-right"));
            $(this).attr('class','content'+(++idx));
        });

        last = imgCnt;
        rollingStart();
    });
    function rollingStart(){
        interval = setInterval(function(){
            $('.visual_view li').each(function(){
                // $(this).css('left',$(this).position().left-1);
            });
            var first_content = $('.content' + first);
            var last_content = $('.content' + last);
            if(first_content.position().left <'-'+($(first_content).width())){
                first_content.css('left', last_content.position().left+last_content.width()+40);
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
}

// 마우스오버 & 클릭

tap.onmouseover = function(e){
    var tap_li = document.querySelectorAll('#tap li');
    for(var i = 0; i<tap_li.length;i++){
        tap_li[i].classList.remove('on');
        e.target.classList.add('on');
    }
}
tap.onclick = function(e){
    var tap_li = document.querySelectorAll('#tap li');
    for(var i = 0; i<tap_li.length;i++){
        tap_li[i].classList.remove('on');
        e.target.classList.add('on');
    }
}