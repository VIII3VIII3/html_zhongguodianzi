$(function(){
	//banner
	function bannerFn(infinite,num){
		$('.bxslider').bxSlider({ 
			mode:'horizontal', //默认的是水平 
			captions: true,//自动控制 
			infiniteLoop:infinite,
			autoHover:true,
			pause:5000,
			adaptiveHeight:true,
			auto:true,
			pager:true,
			controls: true,//左右按钮
			onSliderLoad:function(index){
				bannerNext(index+num);
			},
			onSlideBefore:function(slideElement, oldIndex, newIndex){
				bannerPrev(oldIndex+num);
			},
			onSlideAfter:function(slideElement, oldIndex, newIndex){
				bannerNext(newIndex+num);
			}
		});
	}
	var ieVer=$('html').hasClass('ie8');
	if(ieVer){
		bannerFn(false,0);
	}else{
		bannerFn(true,1);
	}
	
	$('.bxslider2').bxSlider({ 
		mode:'horizontal', //默认的是水平 
		captions: true,//自动控制 
		infiniteLoop:true,
		autoHover:true,
		pause:5000,
		adaptiveHeight:true,
		auto:true,
		pager:true,
		controls: false,//左右按钮
	});

	//banner高度
	function bannerHei(){
		var winHei=$(window).height();
		var headerHei=$('.header').height();
		var banner=$('.bxslider>div');
		banner.height(winHei-headerHei);
		$('.banner-box .bx-viewport').height(winHei-headerHei);
	}

	//banner文字
	function bannerNext(index){
		//var showBox=$('[aria-hidden=false]');
		var showBox=$('.banner-box .div-list').eq(index);
		setTimeout(function(){
			showBox.find('.text-box p').delay(300).animate({
				'top':'0',
				'opacity':'1'
			},1000);
			showBox.find('.text-box h5').delay(700).animate({
				'top':'0',
				'opacity':'1'
			},1000);
			showBox.find('.read-more').delay(1500).animate({
				'opacity':'1'
			},300);
			showBox.find('.read-more a').delay(1500).animate({
				'opacity':'1'
			},500)
			
		},0);
	}
	function bannerPrev(index){
		//var showBox=$('[aria-hidden=true]');
		var showBox=$('.banner-box .div-list').eq(index);
		showBox.find('.text-box p').css({
			'top':'-20px',
			'opacity':'0'
		});
		showBox.find('.text-box h5').css({
			'top':'-20px',
			'opacity':'0'
		});
		showBox.find('.read-more').css({
			'opacity':'0'
		});
		showBox.find('.read-more a').css({
			'opacity':'0'
		});
	}
	bannerNext();

	$(window).on('load.z resize.z',bannerHei);
	$(window).on('load scroll',function(){
		iconsTrans($('.icons-box'));
	});
	
});
//icons
function iconsTrans(target){
	if(target.hasClass('did')) return;

	var winhei=$(window).height();
	var scrollTop=$(window).scrollTop();
	var targetHei=target.offset().top;
	if(winhei+scrollTop>targetHei+150){
		for(var i=0;i<target.find('li').length;i++){
			(function(i){
				target.find('li').eq(i).find('.i-top-in').delay(500*i).animate({
					'width':'118px',
					'height':'118px'
				},500,function(){
					$(this).find('img').animate({
						'opacity':'1'
					},300);
				});
			})(i);
		}
		target.addClass('did');
	}
}