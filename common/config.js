requirejs.config({
	baseUrl: "../libs",
	paths: {
		js: "../../assets/js",
		jquery: "../../bower_components/jquery/dist/jquery.min",
		bootstrap: "../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min",
		bootstrap_dropdown: "../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min",
		underscore: "../../bower_components/underscore/underscore-min",
		backbone: "../../bower_components/backbone/backbone-min",
		VProgress: "../../XTest/wave_background-master/VProgress",
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

		'bootstrap-sass/assets/javascripts/bootstrap/dropdown': ["jquery"]
	}
})