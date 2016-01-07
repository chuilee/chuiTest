requirejs.config({
	baseUrl: "../lib/",
	paths: {
		js: "../assets/js/",
		jquery: "jquery/dist/jquery.min",
		bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min",
		bootstrap_dropdown: "bootstrap-sass/assets/javascripts/bootstrap.min",
		underscore: "underscore/underscore-min",
		backbone: "backbone/backbone-min",
		
	},
	shim: {
		underscore: {
			exports: "_"
		},

		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		
		bootstrap: ["jquery"],
		bootstrap_dropdown: ["jquery"]
	}
});

require(["jquery", "bootstrap","js/ugc-dropdown"], function($){
	
});

