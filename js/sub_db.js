$(function(){
    $.get('./books.txt',function(data){
        $('.books_desc').html(data);
        
    $('.probtn').click(function(){
        if($(this).val()==1){
            $('.books_desc').toggleClass('active');
            $(this).parent().toggleClass('active');
            $(this).html('상품 내용 접기');
            $(this).prop('value',2);
        } else {
            $('.books_desc').toggleClass('active');
            $(this).parent().toggleClass('active');
            $(this).html('상품 내용 펼치기');
        }
        
    })
    })
})