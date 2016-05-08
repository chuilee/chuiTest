require(["../requireConfig"], function(){
	require(["vue", "text!templates/slot.html"], function(Vue, slotTpl){

		var vm = new Vue({
			el: "#slots",
			data: {
				currentView: "page-home",
				menus: [{name: "HOME", current: true},{ name: "ABOUT", current: false}, { name: "CONTACT", current: false}]
			},
			components: {
				pageHome: {
					template: "<h3>home</h3>"
				},
				pageAbout: {
					template: "<h3>about</h3>"
				},
				pageContact: {
					template: "<h3>contact</h3>"
				}
			},
			methods: {
				show: function(event){
					console.log(this.$children)
					this.currentView = "page-contact";
				}
			}
		});

		var data = {a: 10};

		var vm1 = new Vue({
			el: "",
			data: function(){
				return {
					a: 11
				}
			}
		});

		var vm2 = new Vue({
			el: "",
			data: data
		})

		console.log(vm1.a, data.a, vm2.a);

	});
});