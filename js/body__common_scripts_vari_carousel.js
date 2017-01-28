$( document ).ready(function( $ ){
	$( '#Img_carousel' ).sliderPro({width:753, height:375, fade:true, arrows:true, buttons:false, fullScreen:false, smallSize:500, startSlide:0, mediumSize:1000, largeSize:3000, thumbnailArrows:true, autoplay:false });
	$( '#Video_carousel' ).sliderPro({width:753, height:375, fade:true, arrows:true, buttons:false, fullScreen:false, smallSize:500, startSlide:0, mediumSize:1000, largeSize:3000, thumbnailArrows:true, autoplay:false });
	$( '#TXT_carousel' ).sliderPro({width:753, height:375, fade:true, arrows:true, buttons:false, fullScreen:false, smallSize:500, startSlide:0, mediumSize:1000, largeSize:3000, thumbnailArrows:true, autoplay:false });
	setTimeout(function(){
		// alert("Hello");
		
		// $( "#Img_carousel" ).children( ".sp-image" ).css( "margin-top", "-118px" );
		
		// $("img").attr("width","500");
		// $("img").attr("width","500");
		

		
		/*
		$('.sp-image slider_img_scheda').css({
			'margin-top': '-118px'
		});
		*/
	}, 1500);
});
setTimeout(function(){
	$('#preloader').delay(500).fadeOut('slow');
}, 2000);