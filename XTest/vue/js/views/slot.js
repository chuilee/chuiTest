require(["../requireConfig"], function(){
	require(["vue", "text!templates/slot.html"], function(Vue, slotTpl){

		Vue.component("my-component", {
			template: slotTpl
		});

		new Vue({
			el: "#slot"
		});
	});
});