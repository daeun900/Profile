$(document).ready(function(){

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
	//각각의 section에서 마우스를 움직이면
	$("section").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".move1").css({"right":400+(posX/20) , "bottom":150+(posY/20) });
		$(".move2").css({"right":150+(posX/20) , "top":250+(posY/20) });		
	
	});
	
	//메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		/*
		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
		*/
		
		for(var i=0; i<6;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");

				$('#wrap section').removeClass('active');
                $('#wrap section').eq(i).addClass('active');
			};
		}

		if( $('section.home').hasClass('active') || $('section.profile').hasClass('active')){
            $('#wrap').removeClass('dark');
			$('#wrap').removeClass('bright');
            $('#wrap').addClass('space')
			$("#logo").attr("src", "image/logo.png");

        } 
		else if( $('section.mobile').hasClass('active') || $('section.wordpress').hasClass('active')){
            $('#wrap').removeClass('dark');
			$('#wrap').removeClass('space');
            $('#wrap').addClass('bright')
			$("#logo").attr("src", "image/logo2.png");

        } else {
            $('#wrap').removeClass('bright');
			$('#wrap').removeClass('bright');
            $('#wrap').addClass('dark');
			$("#logo").attr("src", "image/logo.png");
        }
   });

   	//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
			//마우스 휠을 위로 올렸을 때 detla:1
			//마우스 휠을 아래로 내리면 delta:-1
			//마우스 휠을 올렸을때	

			//console.log($(this).index());

		
			  if (delta > 0 && $(this).index()!=2) {  
				//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
			
				 var prev = $(this).prev().offset().top;
				 //문서 전체를 prev에 저장된 위치로 이동
				 $("html,body").stop().animate({"scrollTop":prev},1400);
				 return false;
				
				 
	
			//마우스 휠을 내렸을때	 
			  }else if (delta < 0 && $(this).index()!=7) {  
	
				//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				 var next = $(this).next().offset().top;
				 //문서 전체를 next에 저장된 위치로 이동
				 $("html,body").stop().animate({"scrollTop":next},1400);  
				 return false;
				}                                      
			  }
			  
		 );

//menu open
$('.menu_open').on('click', function(e){
	e.preventDefault();

	if($('#menu').hasClass('on')){
		$('#menu').removeClass('on');
	} else {
		$('#menu').addClass('on');
	}
})

$('#menu li').on('click', function(){

	if($('#menu').hasClass('on')){
		$('#menu').removeClass('on');
	}

});

});


//typing
const content = "끊임없이 탐구하고 배움을 찾아 항해하겠습니다.".split("");
let typingBool = false;
let typingIdx = 0;


function typing () {
    if (typingIdx < content.length) {
        $(".text_box span").append(content[typingIdx]);
        typingIdx++; 
    } 
    else{ 
        clearInterval(clear1);
        
    } 
}
let clear1 =  setInterval(typing, 50);






