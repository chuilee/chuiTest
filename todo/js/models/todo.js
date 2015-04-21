define( [ "underscore", "backbone" ], function ( _, Backbone ) {

	var todo = Backbone.Model.extend( {

		defaults: {
			title: "",
			completed: false
		},

		toggle: function(){
			this.save( {
				completed: !this.get( "completed" )
			} );
		}

	} );

	return todo;

} )