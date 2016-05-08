require(["../requireConfig"], function(){
	require(["vue"], function(Vue){

		var vm = new Vue({
			el: "#app",
			data: {
				newTodo: "",
				todos: [
					{text: "do something"},
					{text: "eating"},
					{text: "meeting"}
				]
			},
			methods: {
				addTodo: function(){
					var text = this.newTodo.trim();
					var self = this;
					console.log(this);
					if(text){
						this.todos.push({text: text});
					}

					this.newTodo = "";
				},

				removeTodo: function(index){
					this.todos.splice(index, 1);
				}
			}
		});

		vm.removeTodo(0);
	})
})