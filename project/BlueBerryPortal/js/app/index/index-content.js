require(["../common/config.js"], function(){
	require([
			"jquery",
			"fullPage",
			"bootstrap_tab",
			"bootstrap",
			], function($){
				$(function(){
					$('#fullpage').fullpage({
						anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6','page7'],
						menu: '#menu',
						scrollingSpeed:1500,
						css3:true,
						afterRender:function(){
							$("#product").show();
							
						},
						onLeave:function(index,nextIndex,direction ){
							$("#success").show();
							$("#dynamic").show();
							$("#partner").show();
							$("#about").show();
							$("#contact").show();
						}
						
					});				
				});

			});
});