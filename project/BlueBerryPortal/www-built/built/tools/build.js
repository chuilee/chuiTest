({
    appDir: "../",
    dir: "../built",
    mainConfigFile: "../common/config.js",
    modules: [{ // job
            name: "app/about/job"
        }, { // about
            name: "app/about/about"
        }]
        // job
        // out: "./js/app/about/job-built.js",
        // name: "app/about/job"

        // about
        // out: "./js/app/about/about-built.js",
        // name: "app/about/about"

        // index
        // out: "./js/app/index/index-built.js",
        // name: "app/index/index-content"

        // news-list
        // out: "./js/app/news/list-built.js",
        // name: "app/news/list"

        // news-details
        // out: "./js/app/news/details-built.js",
        // name: "app/news/details"
});
