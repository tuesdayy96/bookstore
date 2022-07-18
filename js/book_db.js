$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : {query: "수능"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.test .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.test .con').eq(i).text(data.documents[i].title);
        $('.test .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})