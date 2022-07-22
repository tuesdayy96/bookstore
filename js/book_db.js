// 수험서
$(function(){
    $.ajax({
        method: "GET",
        url : "https://dapi.kakao.com/v3/search/book?target=title",
        data : {query: "수능"},
        headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
    })
    .done(function(data){
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
        for(var i in data.documents){
            $('.fancy .au').eq(i).html(data.documents[i].authors+" <small>지음<small>");
            $('.fancy .con').eq(i).text(data.documents[i].title);
            $('.fancy .thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
        }  
    })
})


// 오늘의 책
$(function(){
    const today_arr = ['선재국어 세트','2023 이동기 영어 기본서','2023 문동균 한국사','2023 써니 행정법총론'];
    for(var i in today_arr){
        $.ajax({
            method: "GET",
            url : "https://dapi.kakao.com/v3/search/book",
            data : {query: today_arr[i]},
            async : false,
            headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
        })
        .done(function(data){
            for(var j in data.documents){
                $('.todayBook .au').eq(i).html("<small>"+data.documents[0].authors[0]+'/'+data.documents[j].publisher+"</small>");
                $('.todayBook .title').eq(i).text(data.documents[0].title);
                $('.todayBook .thumb').eq(i).html("<img src='"+data.documents[0].thumbnail+"'>");
                var str = data.documents[0].contents;
                var str2 = str.substring(0,40);
                $('.todayBook .con').eq(i).html(str2);
            }
            
        })
    }
})


// 여기부터 차트.
$(function(){
    var key_li = $('.it')
    var total_arr = [
        ['종합','문학','인문','경제','자기계발','어린이','자격증'],
        ['그림책','웹툰','장편소설','영화','연휴','시리즈','에세이','기분전환','유퀴즈','사랑','스타','노벨문학상','어른동화','젋은 작가','시집','여름소설','추리소설','셀럽','웹툰원작','반려동물','힐링','고전','소장욕구','킬링타임','연애'],
        ['마케팅','환경','우주과학','기후변화','지식','인공지능','뇌과학','추천','맛','대학생','미술','역사','철학','필수 역사'],
        ['재테크','2022 경제','코로나','블록체인','부동산','내 집 마련','언택트','브랜딩','인사이트','돈','창업','경제 트렌드','저축'],
        ['원어민 영어','대학교재','자격증 취득','기출문제','NCS','취업 자격증','한국사','자소서','모의고사'],
        ['취미','MZ','에코라이프','가스라이팅','유튜버','랜선','자존감','집콕','동기부여','보람','현대인','나만의','정리','청춘','성장','"나"'],
        ['펫','컬러링','홈마카세','면역력','스트레칭','도시락','에어프라이어','텃밭','홈 트레이닝','슬기로운','스트레스','다이어트']
    ];

    $.ajax({
        method:"GET",
        url:"https://dapi.kakao.com/v3/search/book",
        data :{query: total_arr[$('.cg_list li.on').index()][$('.it li a.on').index()]},
        headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
    })
    .done(function(data){
        console.log(data)
        for(var i in data.documents){
            $('.img_idx').eq(i).html(parseInt(i)+1);
            $('.img_au').eq(i).html(data.documents[i].authors[0]+" <small>지음<small>");
            $('.img_title').eq(i).text(data.documents[i].title);
            $('.img_thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
            $('.img_pub').eq(i).html(data.documents[i].publisher+" <small>지음<small>");
        }
    })
$('.cg_list li').click(function(){
    $.ajax({
        method:"GET",
        url:"https://dapi.kakao.com/v3/search/book",
        data :{query: total_arr[$(this).index()][$('.it li a.on').index()]},
        headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
    })
    .done(function(data){
        console.log(data)
        for(var i in data.documents){
            $('.img_idx').eq(i).html(parseInt(i)+1);
            $('.img_au').eq(i).html(data.documents[i].authors[0]+" <small>지음<small>");
            $('.img_title').eq(i).text(data.documents[i].title);
            $('.img_thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
            $('.img_pub').eq(i).html(data.documents[i].publisher+" <small>지음<small>");
        }
    })
})
    

    for(let i = 0;i<10;i++){
        key_li.children('li').click(function(){
            $.ajax({
                method: "GET",
                url : "https://dapi.kakao.com/v3/search/book",
                data : {query: total_arr[$(this).parent().index()][$(this).index()]},
                headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
            })
            .done(function(data){
                console.log(data)
                for(var j in data.documents){
                    $('.img_idx').eq(i).html(parseInt(i)+1);
                    $('.img_au').eq(i).html(data.documents[i].authors[0]+" <small>지음<small>");
                    $('.img_title').eq(i).text(data.documents[i].title);
                    $('.img_thumb').eq(i).html("<img src='"+data.documents[i].thumbnail+"'>");
                    $('.img_pub').eq(i).html(data.documents[i].publisher+" <small>지음<small>");
                }
            })
        })
       
    }
    

})

// 숨돌리기

$(function(){
    const recom_arr = ['드라마','생활','소설','컴퓨터','경제','인문','과학'];
    for(var i=0;i<recom_arr.length;i++){
        $.ajax({
            method: "GET",
            url : "https://dapi.kakao.com/v3/search/book",
            data : {query: recom_arr[i]},
            async : false,
            headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
        })
        .done(function(data){
            for(j in data.documents){
                    $('.recom_au').eq(i).html(data.documents[j].authors[0]+' | '+data.documents[j].publisher);
                    $('.recom_title').eq(i).text(data.documents[j].title);
                    $('.recom_thumb').eq(i).html("<img src='"+data.documents[j].thumbnail+"'>");
            }
        })
    }

    $.ajax({
        method: "GET",
        url : "https://dapi.kakao.com/v3/search/book?target=title",
        data : {query: '2023',sort:'latest',page:"30"},
        async : false,
        headers : {Authorization :"KakaoAK 0abe6ac39569f3f00d940ada52fddad3"},
    })
    .done(function(data){
        for(j in data.documents){
                $('.latest_au').eq(j).html(data.documents[j].authors[0]+' | '+data.documents[j].publisher);
                $('.latest_title').eq(j).text(data.documents[j].title);
                $('.latest_thumb').eq(j).html("<img src='"+data.documents[j].thumbnail+"'>");
        }
    })
})


