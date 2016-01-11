({
    appDir: "../",
    baseUrl: "js/",
    mainConfigFile: "./common/config.js",
    dir: "../../www-built",
    modules: [
    	{
    		name: "app/about/about",
    		include: [
    			"jquery",
		        "bootstrap_affix",
		        "plugins/elevator.min",
		        "jqurl",
		        "app/public/header-footer"
    		]
    	}
    ]
});
