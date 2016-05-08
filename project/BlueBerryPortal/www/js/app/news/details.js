require([], function() {
    require([
        "jquery",
        "underscore",
        "loadCorsJson",
        "text!templates/public/details-category.html",
        "text!templates/public/details.html",
        "common",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/header-footer"
    ], function($, _, loadCorsJson, categoryView, detailsView, common) {
        var REQ_ID = $.url.param("id"),
            REQ_ACTION = $.url.param("action") || "GetInformationById";

        // 左侧菜单栏交互
        (function() {
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

                "affixed-top.bs.affix": function() {
                    $("#js-slidead").show();
                }
            });
        })();

        // 返回顶部
        var elevator = new Elevator({
            element: document.querySelector('#back-to-top'),
            duration: 1000 // milliseconds
        });

        (function() {
            // 左侧列表
            $("#js-lists").append('<li class="list-group-item"><a href="news-list.html">全部</a></li>');

            // 详情内容
            createContent();

            function createContent() {
                $.ajax({
                    url: common.INFORMATIONAPI,
                    data: {
                        action: REQ_ACTION,
                        id: REQ_ID
                    },
                    success: function(data) {
                        var info = JSON.parse(data).rows[0];
                        getContent(info);
                        createSideBar(info);
                    },
                    error: function(jqXHR, textStatus, error) {
                        alert(error);
                    }
                });
            }


            function getContent(info) {
                loadCorsJson(common.DETAILSSRC + REQ_ID + ".html", function(data) {

                    var details = info,
                        template = _.template(detailsView),
                        html = data;
                    details.html = html;
                    $("#js-details-container").append(template(details));

                });
            }

            function createSideBar(info) {
                loadCorsJson(common.CATEGORYSRC, function(data) {
                    if (typeof data === "string") {
                        data = JSON.parse(data);
                    }
                    var category = data,
                        template = _.template(categoryView),
                        newsCategory;

                    newsCategory = _.findWhere(category, {
                        text: "动态"
                    }).children;

                    _.each(newsCategory, function(item, i) {
                        item.active = info.type;
                        item.listurl = "news-list.html?type=" + item.id;
                        $("#js-lists").append(template(item));
                    });
                });
            }

        })();

    });
});
