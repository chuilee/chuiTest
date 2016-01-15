require(["../requireConfig"], function(){
	require(["vue", "text!templates/slot.html"], function(Vue, slotTpl){
		var Child = Vue.extend({
			template: slotTpl
		});

		Vue.component("my-component", Child);

		new Vue({
			el: "#slot"
		})
	});
});