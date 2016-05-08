require(["../requireConfig"], function() {
    require(["vue"], function(Vue) {

        Vue.config.debug = true;

        Vue.directive('my-directive', {
            
            bind: function () {
                //content
                this.el.innerHTML = this.vm.msg;
            },
            
            update: function (newvalue, oldvalue) {
                //content
                this.el.innerHTML = this.vm.msg;

            },
            
            unbind: function () {
                //content
                this.el.innerHTML = this.vm.msg;
            }
        });

        var vm = new Vue({
            el: "#directive",
            data: {
                msg: "message"
            }
        });

        vm.msg = "message updated!";

        Vue.directive("demo", function(value){
            this.el.innerHTML = value.name + " is " + value.age;
        });

        var vm2 = new Vue({
            el: "#directive2"
        });

        Vue.elementDirective("demo", function(value){
            console.log(this)
            this.el.innerHTML = value.name + " is " + value.age;
        });

        var vm3 = new Vue({
            el: "#directive3",
            data: function(){
                return {
                    name: "jay",
                    age: 30
                };
            }
        });

    });
});
