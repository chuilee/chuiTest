requirejs.config({
	baseUrl: "../lib/",
	paths: {
		js: "../assets/js",
		app: "../js/app",
		models: "../js/models",
		templates: "../js/templates",
		jquery:"jquery/dist/jquery-1.11.3.min",
		fullPage:"fullpage.js/jquery.fullPage.min",
		bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min",
		bootstrap_dropdown: "bootstrap-sass/assets/javascripts/bootstrap/dropdown",
		bootstrap_tab:"bootstrap-sass/assets/javascripts/bootstrap/tab",
		bootstrap_carousel:"bootstrap-sass/assets/javascripts/bootstrap/carousel",
		bootstrap_affix:"bootstrap-sass/assets/javascripts/bootstrap/affix",
		underscore: "underscore/underscore-min",
		backbone: "backbone/backbone-min",
		partners:"../assets/js/jsonData",
		text: "requirejs-text/text",
		common: "../common/common",
		jqurl: "../assets/js/plugins/jquery.url"
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