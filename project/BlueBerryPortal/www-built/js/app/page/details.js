require(["../../common/config"], function() {
    require([
        "jquery",
        "underscore",
        "text!templates/page/category.html",
        "text!templates/page/details.html",
        "common",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/header-footer"
    ], function($, _, categoryView, detailsView, common) {

        var REQ_ID = $.url.param("id"),
            REQ_ACTION = $.url.param("action");

        // 左侧菜单栏交互
        (function(){
            // sidebar fixed
            $("#js-lists").affix({
                offset: {
                    top: 82
                }
            });

            $("#js-lists").on({
                "affixed.bs.affix": function() {
                    $("#js-slidead").hide();
                },

                "affixed-top.bs.affix": function(){
                    $("#js-slidead").show();
                }
            });
        })();
        
        // 返回顶部
        var elevator = new Elevator({
            element: document.querySelector('#back-to-top'),
            duration: 1000 // milliseconds
        });

        (function(){
            // 左侧列表
            $("#js-lists").append('<li class="list-group-item"><a href="http://localhost:8001/example/list.html?id=0">全部</a></li>');

            // 详情内容
            createContent();

            function createContent(){
                $.ajax({
                    url: common.INFORMATIONAPI,
                    data: {action: REQ_ACTION, id: REQ_ID},
                    complete: function(data){
                        var info = JSON.parse(data.responseText).rows[0];

                        getContent(info);
                        createSideBar(info);
                    }
                });
            }


            function getContent(info){
                $.ajax({
                    url: common.DETAILSSRC+REQ_ID+".html",
                    complete: function(data){
                        var details = info,
                            template = _.template(detailsView),
                            html = data.responseText;
                        details.html = html;

                        $("#js-details-container").append(template(details));
                    }
                });
            }

            function createSideBar(info){
                $.ajax({
                    url: common.CATEGORYSRC,
                    complete: function(data){
                        var category = JSON.parse(data.responseText),
                            template = _.template(categoryView);

                        _.each(category, function(item, i){
                            item.active = info.type;
                            item.listurl = common.DOMAIN+"list.html?type="+item.id;
                            $("#js-lists").append(template(item));
                        });
                    }
                });
            }

        })();
    		
    });
});
