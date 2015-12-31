define(["underscore",
        "jquery",
        "text!templates/public/header.html",
        "text!templates/public/footer.html",
        "jqurl"
    ],
    function(_, $, headerView, footerView) {

    	(function(){
    		var file = $.url.attr("file"),
    			template = _.template(headerView),
    			menu = {active: "index"};

        	switch(file){
        		case "news-list.html":
        		case "news-details.html":
        			menu.active = "news";
        			break;
        		case "works-list.html":
        		case "works-details.html":
        			menu.active = "works";
        			break;
                case "about.html":
                    menu.active = "about";
                    break;
        		default:
        			menu.active = "index";
        			break;
        	}

        	$("#page-header").append(template(menu));
    		
    	})();
        $("#page-footer").append(footerView);
    })
