requirejs.config({
	baseUrl: "../js/",
	paths: {
		app: "./app",
		lib: "./lib",
		templates: "./templates",
		jquery:"lib/jquery/dist/jquery-1.11.3.min",
		fullPage:"lib/fullpage.js/jquery.fullPage.min",
		bootstrap: "lib/bootstrap-sass/assets/javascripts/bootstrap.min",
		bootstrap_dropdown: "lib/bootstrap-sass/assets/javascripts/bootstrap/dropdown",
		bootstrap_tab:"lib/bootstrap-sass/assets/javascripts/bootstrap/tab",
		bootstrap_carousel:"lib/bootstrap-sass/assets/javascripts/bootstrap/carousel",
		bootstrap_affix:"lib/bootstrap-sass/assets/javascripts/bootstrap/affix",
		underscore: "lib/underscore/underscore-min",
		backbone: "lib/backbone/backbone-min",
		partners:"../assets/js/jsonData",
		text: "lib/requirejs-text/text",
		common: "common/common",
		jqurl: "plugins/jquery.url"
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
		bootstrap_dropdown: ["jquery"],
		bootstrap_tab:["jquery"],
		bootstrap_carousel: ["jquery"],
		bootstrap_affix: ["jquery"],
		jqurl: ["jquery"],
		fullPage: ["jquery"]
	}
});