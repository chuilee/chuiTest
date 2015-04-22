define([
		"jquery",
		"underscore",
		"backbone",
		"text!templates/todos.html",
		"common"
	], function ($, _, Backbone, todosTemplate, Common) {
		console.log( Backbone )
	var TodoView = Backbone.View.extend({

		_template: _.template( todosTemplate ),

		tagName: "li",

		events: {
			"click .toggle":	"toggleCompleted",
			"dblclick label":	"edit",
			"click .destroy":	"clear",
			"keypress .edit":	"updateOnEnter",
			"keydown .edit":	"revertOnEscape",
			"blur .edit":		"close"
		},

		initialize: function(){
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "destroy", this.remove);
			this.listenTo(this.model, "visible", this.toggleVisible);
		},

		render: function(){
			this.$el.html( _template( this.model.toJSON() ) );
			this.$el.toggleClass('completed', this.model.get('completed'));

			this.toggleVisible();
			this.$input = this.$('.edit');
			return this;
		},

		toggleVisible: function(){
			this.$el.toggleClass( "hidden", this.isHidden() );
		},

		isHidden: function(){
			var isCompleted = this.model.get('completed');
			return (// hidden cases only
				(!isCompleted && Common.TodoFilter === 'completed') ||
				(isCompleted && Common.TodoFilter === 'active')
			);
		},

		toggleCompleted: function () {
			this.model.toggle();
		},

		edit: function(){
			this.$el.addClass('editing');
			this.$input.focus();
		},

		clear: function(){
			this.model.destroy();
		},

		updateOnEnter: function(e){

			if( e.keycode == Common.ENTER_KEY ) {
				this.close();				
			}

		},

		close: function(){

			var value = this.$input.val();
			var trimmedValue = value.trim();

			if (trimmedValue) {
				this.model.save({ title: trimmedValue });

				if (value !== trimmedValue) {
					// Model values changes consisting of whitespaces only are not causing change to be triggered
					// Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
					// And if yes, we've to trigger change event ourselves
					this.model.trigger('change');
				}
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');

		},

		revertOnEscape: function(e){
			if( e.keycode == Common.ESCAPE_KEY ){
				this.$input.val( this.model.get("title") );
				this.$el.removeClass( "editing" );
			}
		}

	});

	return TodoView;

})