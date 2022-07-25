// 수량 조절
var price = 12600;
var amount = document.getElementById('amount');
var total = document.querySelector('.total'); 
var sum;
function add(){
    addcount = amount;
    if(addcount.value >= 99){
        addcount.value = 99 - 1;
        alert('최대 99권까지 구매할 수 있습니다.');
    }
    addcount.value++;
    sum = parseInt(addcount.value)*price;
    newSum = sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    total.innerHTML = '<span>합계</span>'+newSum+'원';
}
function del(){
    addcount = amount;
    if(addcount.value > 1){
        addcount.value--;
        sum = parseInt(addcount.value)*price;
        newSum = sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        total.innerHTML = '<span>합계</span>'+newSum+'원';
    }
};
function change(){
    addcount = amount;
    if(addcount.value < 0){
        addcount.value = 0;
    }
    sum = parseInt(addcount.value)*price;
    newSum = sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    total.innerHTML = '<span>합계</span>'+newSum+'원';
};

// 팝업
$(function(){
    $('.closeup').click(function(){
        $('.imgPop').stop().show();
    })
    $('.popclose, .imgPop img').click(function(){
        $('.imgPop').stop().hide();
    })
    $('#amount').on('keyup',function(){
        this.value = this.value.replace(/[^0-9]/g,'1');
        if(this.value >= 99 || isNaN(this.value) || this.value == null){
           return this.value = 1;
        }
    })
})

// 체크박스
$(function(){
    $('#selectAll').change(function(){
        if($('#selectAll').is(':checked')==true){
            $('.chx input').prop('checked',true);
        } else {
            $('.chx input').prop('checked',false)
        }
        $('.adds_title span').click(function(){
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            $('.left strong span').html($(this).text());
            $('input:checked').prop('checked',false);
        })
    })
})

$(function(){
    $('.right_slide li:Lt(3)').clone().addClass('cloned').removeClass('overlap').appendTo('.right_slide');
    $('.right_btn .next').click(function(){
        $('.right_slide').stop().animate({marginLeft:-100+'%'},function(){
        });
    })
    $('.right_btn .prev').click(function(){
        $('.right_slide').stop().animate({marginLeft:0+'%'});
    })
})
