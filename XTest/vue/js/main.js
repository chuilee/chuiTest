require(["./requireConfig"], function() {
    require(["vue", "text!templates/example.html"], function(Vue, exampleTpl) {
        // hello world!
        var object = {
            message: "hello world!"
        };

        var helloworld = new Vue({
            el: "#example",
            data: object
        });

        // components
        var object2 = {
            message: "this is a components"
        };

        var MyComponent = Vue.extend({
            template: exampleTpl,
            data: function() {
                return {
                    message: "this is a component"
                };
            }
        });

        // register it with the tag <example>
        Vue.component('example', MyComponent);

        var example2 = new Vue({
            el: "#example2"
        });

        // v-for
        var todos = [{
            text: "list1"
        }, {
            text: "list2"
        }, {
            text: "list3"
        }, {
            text: "list4"
        }];

        var todoVue = new Vue({
            el: "#js-todos",
            data: {
                todos: [{
                    text: "list1"
                }, {
                    text: "list2"
                }, {
                    text: "list3"
                }, {
                    text: "list4"
                }],
                show: true
            }
        });

        var btn = document.getElementById("change-btn");
        btn.addEventListener("click", function() {
            helloworld.message = "You clicked me!";
            console.log(example2);
        });

        // computed
        var vmComputed = new Vue({
            el: "#computed",
            data: {
                a: 10
            },
            computed: {
                b: {
                    set: function(val) {
                        this.a = 1;
                        object.message = "Fuck, you change me!"
                    },
                    get: function(){
                        return this.a + 10;
                    }
                }
            }
        });

        vmComputed.b = 30;

        // $watch
        var vmWatch = new Vue({
            el: "#watch",
            data: {
                a: "apple",
                b: "banner"
            }
        });

        vmWatch.$watch("a", function(val) {
            this.b = val + " apple"
        });

        vmWatch.a = "banner now";

        // bind:url
        new Vue({
            el:"#bindUrl",
            data: {
                url: "http://www.google.com.hk"
            }
        });

        // lazy
        new Vue({
            el: "#lazy",
            data: {
                name: "CHUILEE"
            }
        });
    });
});
