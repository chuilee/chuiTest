// 
require.config({
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps:[ "jquery", "underscore" ],
			exports: "Backbone"
		},
		"backboneLocalstorage": {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		"jquery": "../bower_components/jquery/jquery",
		"underscore": "../bower_components/underscore/underscore",
		"backbone": "../bower_components/backbone/backbone",
		"backboneLocalstorage": "../bower_components/backbone.localStorage/backbone.localStorage",
		"text": "../bower_components/requirejs-text/text"
	}
});

require( [ "backbone", "views/app", "routers/router" ], function ( Backbone, AppView, Workspace ) {
	new AppView();
	new Workspace();
	Backbone.history.start();
} )