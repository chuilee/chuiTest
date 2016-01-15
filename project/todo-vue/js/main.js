requirejs.config({
	baseUrl: "../../../project/todo-vue/js/",
	paths: {
		vue: "lib/vue/dist/vue.min"
	},
	shime: {
		vue: {
			exports: "VUE"
		}
	}
});

require(["vue"], function(VUE){
	
})