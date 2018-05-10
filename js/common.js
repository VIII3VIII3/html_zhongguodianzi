$(function() {
	//nav
	var navList=$('.header .right ul>li');
	navList.hover(function(){
		$(this).find('.second-nav').show().closest('li').siblings().find('.second-nav').hide();
	},function(){
		$(this).find('.second-nav').hide();
	});

	//fixed-nav
	function fixedNav(){
		var temp=$(window).scrollTop();
		if(temp<=50){
			$('.header').removeClass('active');
		}else{
			$('.header').addClass('active');
		}
	}

	//pad-nav
	var padNavBtn=$('.header .pad-btn'),padNav=$('.pad-nav');
	padNavBtn.on('click',function(){
		padNav.fadeIn();
	});

	var padNavClose=$('.pad-nav .close-box .close');
	padNavClose.on('click',function(){
		padNav.fadeOut();
	});

	var header=$('.header');
	function headerTransitionFn(){
		header.find('.top').addClass('active');
		header.find('.logo').addClass('active');
		header.find('.right').addClass('active');
	}
	headerTransitionFn();


	$(window).on('scroll.z load',fixedNav);

	//wx
	var vxBtn=$('.wx-btn');
	vxBtn.on('click',function(){
		$('.wx-code-box').show().animate({
			'opacity':'1',
			'top':'20%'
		},400);
	});
	var vxClose=$('.wx-code-close');
	vxClose.on('click',function(){
		$('.wx-code-box').animate({
			'opacity':'0',
			'top':'0'
		},400,function(){
			$('.wx-code-box').hide();
		});
	})

	//subcompany
	var subcompany = $('#subCompany');
    subcompany.on('click',function(){
        var animateState = $('.subCompany-list').css('opacity') == '1' ? {
                'opacity':'0',
                'top':'-200px'
            } : {
            'opacity':'1',
            'top':'-152px'
        };
        $('.subCompany-list').animate(animateState,400);
    })
});

//_load
;(function($,w){
	var winHei=$(w).height();
	var loadFn=function(){
		var $conLis=$('[_load]');
		$conLis.each(function(i,v){
			var scrollTop=$(w).scrollTop();
			var $v=$(v);
			if($conLis.filter('_load')==0) $(w).off('scroll.z');
			if( winHei+scrollTop > $v.offset().top){
				$v.addClass('active');
				$(this).removeAttr('_load');
			}
		})
	}
	$(w).on('scroll.z load',loadFn);
})(jQuery, window);