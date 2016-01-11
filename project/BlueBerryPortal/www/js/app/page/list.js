require(["../../common/config"], function() {
    require([
        "jquery",
        "underscore",
        "text!templates/page/category.html",
        "text!templates/page/list.html",
        "common",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/header-footer"
    ], function($, _, categoryView, listView, common) {

        var REQ_TYPE = $.url.param("type") || 0;

        // sidebar fixed
        $("#js-lists").affix({
            offset: {
                top: 382
            }
        });

        // 返回顶部
        var elevator = new Elevator({
            element: document.querySelector('#back-to-top'),
            duration: 800 // milliseconds
        });

        (function() {
            // 左侧列表
            $("#js-lists").append('<li class="list-group-item"><a class="'+ (REQ_TYPE == 0 ? "status-active" : "") +'" href="http://localhost:8001/example/list.html?type=0">全部</a></li>');

            $.ajax({
                url: common.CATEGORYSRC,
                complete: function(data) {
                    var category = JSON.parse(data.responseText),
                        template = _.template(categoryView);

                    _.each(category, function(item, i) {
                        item.active = REQ_TYPE;
                        item.listurl = common.DOMAIN + "list.html?type=" + item.id;
                        $("#js-lists").append(template(item));
                    });
                }
            });

        })();

        (function() {
            // 动态列表
            $.ajax({
                url: common.DBHOST + "PortalApi/Api/InformationApi.aspx",
                data: {
                    action: "GetInformations",
                    type: REQ_TYPE
                },
                complete: function(data) {
                    var lists = JSON.parse(data.responseText).rows,
                        template = _.template(listView);
                    
                    if(!lists.length){
                        $("#js-lists-conainer").html("<div>暂无内容</div>");
                        return;
                    }

                    _.each(lists, function(list, i) {
                        list.imgurl = common.IMGDIR + list.img;
                        list.url = "details.html?action=GetInformationById&id=" + list.id;
                        $("#js-lists-conainer").append(template(list));
                    });
                }
            });

        })();

    });
});
