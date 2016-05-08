require(["../requireConfig"], function() {
    require(["vue"], function(Vue) {

        Vue.component("child", {
            template: "#childTpl",
            data: function(){
                return {
                    msg: "item1"
                }
            },
            methods: {
                notify: function(){
                    if(this.msg.trim()){
                        this.$dispatch("child-msg", this.msg);
                        this.msg = "";
                    }
                }
            }
        });

        var parent = new Vue({
        	el: "#parent",
        	data: {
                message: ["item0"]
            },
            events: {
                "child-msg": function(msg){
                    this.message.push(msg);
                }
            }
        });

        parent.$refs.profile.msg = "item5";

    });
});
