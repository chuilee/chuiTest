require([], function() {
    require([
        "jquery",
        "underscore",
        "loadCorsJson",
        "text!templates/public/category.html",
        "text!templates/public/list.html",
        "common",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/pagination",
        "app/public/header-footer"
    ], function($, _, loadCorsJson, categoryView, listView, common) {

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

            loadCorsJson(common.CATEGORYSRC, function(data) {
                if(typeof data === "string"){
                    data = JSON.parse(data);
                }
                var parentCategory = _.findWhere(data, {
                        text: "案例"
                    }),
                    template = _.template(categoryView),
                    newsCategory;

                var REQ_TYPE = $.url.param("type") || parentCategory.id;
                var REQ_PAGE = $.url.param("page") || 1;
                var REQ_ROWS = $.url.param("rows") || 10;

                childrenCategory = parentCategory.children;
                // 左侧列表
                $("#js-lists").append('<li class="list-group-item"><a class="' + (REQ_TYPE == parentCategory.id ? "status-active" : "") + '" href="javascript:void(0);" data-type="' + parentCategory.id + '">全部</a></li>');

                _.each(childrenCategory, function(item, i) {
                    item.active = REQ_TYPE;
                    $("#js-lists").append(template(item));
                });

                createList(REQ_TYPE, REQ_PAGE, REQ_ROWS);

                $("#js-lists").on("click", function(e) {
                    var $target = $(e.target),
                        $lists = $(this);
                    if ($target.is("a")) {
                        e.preventDefault();

                        if (!$target.hasClass("status-active")) {
                            $(this).find(".status-active").removeClass("status-active");
                            $target.addClass("status-active");
                            var type = $target.attr("data-type");

                            $("#js-lists-conainer").empty();

                            createList(type, REQ_PAGE, REQ_ROWS);
                        }

                    }
                });

                $.url.setUrl();
            });

        })();

        function createList(type, page, rows) {
            // 动态列表
            $.ajax({
                url: common.DBHOST + "Api/InformationApi.aspx",
                data: {
                    action: "GetInformations",
                    type: type,
                    page: page,
                    rows: rows
                },
                success: function(data) {
                    var responseText = JSON.parse(data),
                        lists = responseText.rows,
                        total = responseText.total,
                        template = _.template(listView);

                    if (!lists.length) {
                        $("#js-lists-conainer").html('<div class="null-content"><span class="null-box"></span><span class="null-text">暂无内容...</span></div>');
                        $("#pagination-container").empty();
                        return;
                    } else {
                        $("#js-lists-conainer").html(" ");
                    }

                    _.each(lists, function(list, i) {
                        list.imgurl = common.IMGDIR + list.img;
                        list.url = "works-details.html?id=" + list.id;
                        $("#js-lists-conainer").append(template(list));
                    });

                    $("#pagination-container").pagination({
                        pageNumber: page,
                        pageSize: rows,
                        onChange: function(idx, size) {
                            createList(type, idx, size);
                        }
                    });

                    $("#pagination-container").pagination("setTotalCount", total);

                }
            });

        }

    });
});
