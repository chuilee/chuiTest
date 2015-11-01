;(function($) {
	
	$.fn.avtSegmentedControl = function(opts){

    		var defaults = {},
    			options = $.extend({}, defaults, opts);
    			
    		return this.each(function(){

    			var $btns = $(this).find(".mui-control-item"),
    				$activePanel = null;

    			$btns.each(function(){
    				if( $(this).hasClass("mui-active") ){
    					$activePanel = $($(this).attr("href"));
    				}
    			});
    			$activePanel = $($btns.eq(0).attr("href"));
    			$activePanel.show();

	    		$(this).on("click", function(event){

	    			event.preventDefault();

	    			var $target = $(event.target),
	    				$_activePanel = $( $target.attr("href") );

	    			$target.addClass("mui-active").siblings(".mui-active").removeClass("mui-active");

	    			$_activePanel.show().siblings(".avt-control-content").hide();
	    				
	    		})

    		})

    	}

})(Zepto);