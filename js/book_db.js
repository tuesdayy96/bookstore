// 수험서
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

// 참고서
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : {query: "참고서"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.referrence .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.referrence .con').eq(i).text(data.documents[i].title);
        $('.referrence .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})

// 외국어
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : {query: "영어 일본어"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.foreign .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.foreign .con').eq(i).text(data.documents[i].title);
        $('.foreign .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})

// 대학교재
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : {query: "대학교재" ,page:'2'},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.university .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.university .con').eq(i).text(data.documents[i].title);
        $('.university .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})

// 에세이/자서전
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : {query: "에세이"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.essay .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.essay .con').eq(i).text(data.documents[i].title);
        $('.essay .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})

// 자기계발
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book",
    data : {query: "자기계발", page:"2"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.develop .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.develop .con').eq(i).text(data.documents[i].title);
        $('.develop .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }
    
})

// 문구
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book",
    data : {query: "팬시", page:"2"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.fancy .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
        $('.fancy .con').eq(i).text(data.documents[i].title);
        $('.fancy .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
    }  
})

// 오늘의 책
$.ajax({
    method: "GET",
    url : "https://dapi.kakao.com/v3/search/book?target-title",
    data : {query: "공시",page:"2"},
    headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
})
.done(function(data){
    console.log(data)
    for(var i in data.documents){
        $('.todayBook .au').eq(i).html("<small>"+data.documents[i].authors[0]+'/'+data.documents[i].publisher+"</small>");
        $('.todayBook .title').eq(i).text(data.documents[i].title);
        $('.todayBook .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
        var str = data.documents[i].contents;
        var str2 = str.substring(0,40);
        $('.todayBook .con').eq(i).html(str2);
    }
    
})

