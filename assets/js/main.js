'use strict';
(function($){
	$(window).load(function(){
		// INITIALIZE ANIMSITION
		if($(".animsition").length){
			$(".animsition").animsition({
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body', 
				browser          : [ 'animation-duration',
										  '-webkit-animation-duration',
										  '-o-animation-duration'
										],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slide',
				overlayParentElement  :   'body'
			});
		}

		// NAVBAR
		let _link = $("nav.desktop-nav ul.first-level").children("li");
		let shown = false;
		// show navbar 
		$(".menu-icon").click(function(){
			let _this = $(this);
			$("nav.mobile-nav").slideToggle(200);
			if(!shown){
				_this.children("div").css("width","30px");
				shown = true;
			}else{
				_this.children("div").first().css("width","30px");
				_this.children("div").eq(1).css("width","15px");
				_this.children("div").eq(2).css("width","20px");
				shown = false;
			}
		});
		
		// dropdown - desktop
		_link.hover(function(e){
			e.preventDefault();
			let _this = $(this);
			if(_this.children("ul.second-level").html() !== undefined){
				if(e.type === "mouseenter"){
					_this.children("ul.second-level").slideDown(200);
				}else{
					_this.children("ul.second-level").slideUp(200);
				}
			}
		});

		// dropdown - mobile
		$("nav.mobile-nav").html($("nav.desktop-nav").html()); // set navbar

		let mobile_link = $("nav.mobile-nav ul.first-level").children("li");
		mobile_link.children("a").click(function(e){
			let _this = $(this);
			let submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
			if(submenu_exists){
				e.preventDefault();
				$(".down").slideUp(200);
				if(_this.next("ul.second-level").hasClass("down")){
					_this.next("ul.second-level").removeClass("down");
				}else{
					$(".down").removeClass("down");
					_this.next("ul.second-level").slideDown(200);
					_this.next("ul.second-level").addClass("down");
				}
			}
		});

		// Увеличение картинки и затемнение фона
		$(function () {
			$('.minimized').click(function(e) {
				let i_path = $(this).attr('src');
				$('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup">x</div></div>');
				
				$('#overlay, #magnify').fadeIn('fast');
			});

			$('body').on('click', '#close-popup, #overlay', function(e) {
				e.preventDefault();

				$('#overlay, #magnify').fadeOut('fast', function () {
					$('#close-popup, #magnify, #overlay').remove();
				});
			});
		});
	});
})(jQuery);