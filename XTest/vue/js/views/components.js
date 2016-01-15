require(["../requireConfig"], function(){
	require(["vue", "text!templates/component.html"], function(Vue, componentTpl){

		var PanelTitle = Vue.extend({
			props: ["message"],
			template: "<span>{{message}}, {{ title }}</span>",
			data: function(){
				return {
					title: "title2"
				}
			}
		});

		var Panel = Vue.extend({
			template: componentTpl,
			data: function(){
				return {
					message: "panel body"
				};
			},
			components: {
				// "component-title": {
				// 	template: "{{title}}",
				// 	data: function(){
				// 		return {
				// 			title: "panel title"
				// 		}
				// 	}
				// }
				"component-title": PanelTitle
			}
		});

		Vue.component("product-panel", Panel);

		// Vue.component("outside-title", PanelTitle);

		var vm = new Panel({
			el: "#components"
		});
		vm.message = "I am parent123";
		vm.$children[0].title = "you changed me";

		// vm.$children[1].txt = "title has been changed!"
	});
});