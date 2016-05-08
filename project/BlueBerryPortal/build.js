({
    baseUrl: "./lib/",
    paths: {
        js: "../assets/js",
        jquery: "jquery/dist/jquery-1.11.3.min",
        fullPage: "fullpage.js/jquery.fullPage.min",
        bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min",
        underscore: "underscore/underscore-min",
        partners: "../assets/js/jsonData",
        content: "../js/app/index/content",
        text: "requirejs-text/text",
        common: "../common/common",
        loadCorsJson: "../assets/js/loadCorsJson"
    },
    // dir:"../production",
    out: "./js/app/index/content-built.js",
    name: "../js/app/index/content"
})
