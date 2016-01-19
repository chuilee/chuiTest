requirejs.config({
    baseUrl: "../../../XTest/vue/js/",
    paths: {
    	templates: "./templates",
        vue: "lib/vue/dist/vue",
        text: "lib/text/text"
    },
    shime: {
        vue: {
            exports: "Vue"
        }
    }
});