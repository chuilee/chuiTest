({
    appDir: "../",
    baseUrl: "js/",
    mainConfigFile: "../js/public/config.js",
    dir: "../../www-built",
    modules: [
    	{
    		name: "app/index/index-content",
    		include: [
    			"jquery",
		        "bootstrap_affix",
		        "plugins/elevator.min",
		        "jqurl",
		        "app/public/header-footer"
    		]
    	},
        {
            name: "app/about/about"
        },
        {
            name: "app/about/job"
        },
        {
            name: "app/news/details"
        },
        {
            name: "app/news/list"
        },
        {
            name: "app/page/details"
        },
        {
            name: "app/page/list"
        },
        {
            name: "app/works/details"
        },
        {
            name: "app/works/list"
        }
    ]
});
