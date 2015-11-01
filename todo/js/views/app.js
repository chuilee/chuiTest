define( [
		"jquery",
		"underscore",
		"backbone",
		"collections/todos",
		"views/todos",
		"text!templates/stats.html",
		"common"
	], function ($, _, Backbone, TodoCollection, TodoView, statsText, Common) {
		
		var AppView = Backbone.View.extend( {

			el: "#todoapp",

			_template: _.template( statsText ),

			events: {
				"keypress #new-todo" : "createOnEnter",
				"click #toggle-all" : "toggleAllCompleted",
				"click #clear-completed" : "clearCompleted"
			},

			initialize: function(){
				console.log( this )
				this.allCheckbox = this.$('#toggle-all')[0];
				this.$input = this.$('#new-todo');
				this.$footer = this.$('#footer');
				this.$main = this.$('#main');
				this.$todoList = this.$('#todo-list');

				this.listenTo(TodoCollection, 'add', this.addOne);
				this.listenTo(TodoCollection, 'reset', this.addAll);
				this.listenTo(TodoCollection, 'change:completed', this.filterOne);
				this.listenTo(TodoCollection, 'filter', this.filterAll);
				this.listenTo(TodoCollection, 'all', this.render);

				TodoCollection.fetch({reset:true});
			},

			render: function(){

				var completed = TodoCollection.completed().length;
				var remaining = TodoCollection.remaining().length;

				if (TodoCollection.length) {
					this.$main.show();
					this.$footer.show();

					this.$footer.html(this._template({
						completed: completed,
						remaining: remaining
					}));

					this.$('#filters li a')
						.removeClass('selected')
						.filter('[href="#/' + (Common.TodoFilter || '') + '"]')
						.addClass('selected');
				} else {
					this.$main.hide();
					this.$footer.hide();
				}

				this.allCheckbox.checked = !remaining;

			},

			createOnEnter: function(e){
				if (e.which !== Common.ENTER_KEY || !this.$input.val().trim()) {
					return;
				}

				TodoCollection.create(this.newAttributes());
				this.$input.val('');
			},

			newAttributes: function(){
				return {
					title: this.$input.val().trim(),
					order: TodoCollection.nextOrder(),
					completed: false
				};
			},

			addOne: function( todo ){
				var view = new TodoView({ model: todo });
				this.$todoList.append(view.render().el);
			},

			addAll: function(){
				this.$todoList.empty();
				TodoCollection.each(this.addOne, this);
			},

			filterOne: function( todo ){
				todo.trigger( "visible" );  
			},

			filterAll: function(){
				TodoCollection.each(this.filterOne, this);
			},

			toggleAllCompleted: function(){
				var completed = this.allCheckbox.checked;

				TodoCollection.each( function( todo ){
					todo.save({
						completed: completed
					})
				} )
			} 

		} );

		return AppView;

	} )