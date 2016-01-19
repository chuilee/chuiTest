require(["../requireConfig"], function() {
    require(["vue"], function(Vue) {

        Vue.component("child", {
            props: {
                msg: {
                    type: Number,
                    default: 1000
                }
            },
            template: "<h4>{{msg}}</h4>"
        });

        var parent = new Vue({
        	el: "#props",
        	data: {
        		parentMsg: 100
        	}
        });

        // 获取子实例
        // parent.$children[0].msg = "changed";

    });
});
