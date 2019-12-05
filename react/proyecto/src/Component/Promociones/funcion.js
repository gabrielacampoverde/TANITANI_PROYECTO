$(document).ready(function(){
	
	// Lift card and show stats on Mouseover
    productCard = (e) =>{
        $(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
    }

    $('#product-card').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});	
    
    
	// Flip card to the back side
	$('#view_details').click(function(){		
		$('div.carouselNext, div.carouselPrev').removeClass('visible');
		$('#product-card').addClass('flip-10');
		setTimeout(function(){
			$('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				$('#product-front, #product-front div.shadow').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card').removeClass('flip90').addClass('flip190');
			$('#product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
				setTimeout(function(){
					$('#product-card').css('transition', '100ms ease-out');			
					$('#cx, #cy').addClass('s1');
					setTimeout(function(){$('#cx, #cy').addClass('s2');}, 100);
					setTimeout(function(){$('#cx, #cy').addClass('s3');}, 200);				
					$('div.carouselNext, div.carouselPrev').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});
});			
	