requirejs.config({
	baseUrl: "../js/",
	paths: {
		app: "./app",
		lib: "./lib",
		templates: "./templates",
		jquery:"lib/jquery/dist/jquery-1.11.3.min",
		fullPage:"lib/fullpage.js/jquery.fullPage.min",
		fullPage1:"lib/fullpage.js/jquery.fullPage",
		bootstrap: "lib/bootstrap-sass/assets/javascripts/bootstrap.min",
		bootstrap_dropdown: "lib/bootstrap-sass/assets/javascripts/bootstrap/dropdown",
		bootstrap_tab:"lib/bootstrap-sass/assets/javascripts/bootstrap/tab",
		bootstrap_carousel:"lib/bootstrap-sass/assets/javascripts/bootstrap/carousel",
		bootstrap_affix:"lib/bootstrap-sass/assets/javascripts/bootstrap/affix",
		underscore: "lib/underscore/underscore-min",
		backbone: "lib/backbone/backbone-min",
		text: "lib/requirejs-text/text",
		jqurl: "plugins/jquery.url",
		common: "public/common"
	},
	shim: {
		jquery: {
			exports: "$"
		},

		underscore: {
			exports: "_"
		},

		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		
		bootstrap: {
			deps: ["jquery"],
			exports: "$"
		},
		bootstrap_dropdown: {
			deps: ["jquery"],
			exports: "$"
		},
		bootstrap_tab: {
			deps: ["jquery"],
			exports: "$"
		},
		bootstrap_carousel: {
			deps: ["jquery"],
			exports: "$"
		},
		bootstrap_affix: {
			deps: ["jquery"],
			exports: "$"
		},
		jqurl: {
			deps: ["jquery"],
			exports: "$"
		},
		fullPage: {
			deps: ["jquery"],
			exports: "$"
		}
	}
});