requirejs.config({
	baseUrl: "../libs/",
	paths: {
		js: "../assets/js/",
		models: "../models/",
		jquery: "../libs/jquery/dist/jquery.min",
		bootstrap: "../libs/bootstrap-sass/assets/javascripts/bootstrap.min",
		underscore: "../libs/underscore/underscore-min",
		backbone: "../libs/backbone/backbone-min",
		bootstrap_dropdown: "../libs/bootstrap-sass/assets/javascripts/bootstrap/dropdown",
		bootstrap_collapse: "../libs/bootstrap-sass/assets/javascripts/bootstrap/collapse",
		bootstrap_transition: "../libs/bootstrap-sass/assets/javascripts/bootstrap/transition",
		VProgress: "../XTest/wave_background-master/VProgress",
	},
	shim: {
		bootstrap: ["jquery"],

		underscore: {
			exports: "_"
		},

		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},

		bootstrap_transition: ["jquery"],
		bootstrap_dropdown: ["jquery"],
		bootstrap_collapse: ["jquery", "bootstrap_transition"]
	}
})