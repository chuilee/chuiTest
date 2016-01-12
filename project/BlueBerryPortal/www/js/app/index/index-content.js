require([], function() {
    require([
        "underscore",
        "jquery",
        "loadCorsJson",
        "text!templates/index/works.html",
        "text!jsonData.json",
        "text!ThinkTank.json",
        "common",
        "bootstrap"
    ], function(_, $, loadCorsJson, worksView, partnerJSON, ThinkTank, common) {

        (function() {
            var b_version = navigator.appVersion;
            var version = b_version.split(";");
            if (version.length > 1) {
                var trim_Version = version[1].replace(/[ ]/g, "");
                if (trim_Version == "MSIE9.0" || trim_Version == "MSIE8.0") {
                    for (var i = 0; i < partners.length; i++) {
                        (function(i) {
                            for (var j in partners[i]) {
                                $(".container-partner>.list>.list-item:eq(" + i + ")").hover(function() {
                                    $(".container-partner>.list>.list-item:eq(" + i + ")>.fanzhuan>a>.fanzhuan1").hide();
                                    $(".container-partner>.list>.list-item:eq(" + i + ")").css("background", "url(/page/" + partners[i][j].logo_active + ") no-repeat center");
                                }, function() {
                                    $(".container-partner>.list>.list-item:eq(" + i + ")").html("<div class='fanzhuan'><div class='fanzhuan1'></div><div class='fanzhuan2 gimc-color'></div></div>");
                                    $(".container-partner>.list>.list-item:eq(" + i + ")").css("background", "url(/page/" + partners[i][j].logo + ") no-repeat center");
                                });
                            }
                        })(i);
                    }
                }
                if (trim_Version == "MSIE8.0") {
                    $("#head").css("background", "#ffffff");
                }
            }
        })();

        (function() {
            // 合作伙伴
            var size = 15;
            var partners = JSON.parse(partnerJSON);
            var indicators = $("#carousel-example-generic2").find(".carousel-tab");
            var count = 0;

            _.each(partners, function(value, key, obj) {
                var pages = Math.ceil(value.length / size); // 页数;
                var partner = _.groupBy(value, function(value, key, list) {
                    return Math.floor(key / size);
                });

                for (var i = 0; i < pages; i++) {
                    var item = $('<div class="item" data-item="' + key + '"><ul class="list"></ul></div>').appendTo($("#carouselInner"));
                    var item_ul = item.find(".list");
                    if (i === 0) {
                        $('<li data-target="#carousel-example-generic2" data-slide-to="' + count + '">' + key + '</li>').appendTo(indicators);
                    }
                    count++;

                    _.each(partner, function(item, index, value) {
                        if (index == i) {
                            _.each(item, function(value, key, list) {
                                var html = '<li class="list-item">' + '<div class="fanzhuan">' + '<a target="_blank" href="javascript:void(0);">' + '<div class="fanzhuan1 gimc" style="background: url(' + value.logo + ') 50% 50% no-repeat;"></div>' + '<div class="fanzhuan2 gimc-color" style="background: url(' + value.logo_active + ') 50% 50% no-repeat;"></div>' + '</a></div></li>';
                                $(html).appendTo(item_ul);
                            });
                        }
                    });
                }
            });
            indicators.find(":first-child").addClass("active");
            $("#carouselInner").find(".item").eq(0).addClass("active");

            $("#carousel-example-generic2").on("slid.bs.carousel", function() {
                var item = $(this).find(".item.active").attr("data-item");
                switch (item) {
                    case "企业":
                        indicators.find("li:contains('企业')").addClass("active").siblings().removeClass("active");
                        break;
                    case "媒体":
                        indicators.find("li:contains('媒体')").addClass("active").siblings().removeClass("active");
                        break;
                    default:
                        indicators.find("li:contains('创意伙伴')").addClass("active").siblings().removeClass("active");
                        break;
                }
            });
        })();

        (function() {
            // 蓝莓智库
            var size = 12;
            var tanks = JSON.parse(ThinkTank);
            var carousel = $("#carousel-example-generic3");
            var indicators = carousel.find(".carousel-tab");
            var carouselInner = carousel.find(".carousel-inner");
            var count = 0;

            _.each(tanks, function(value, key, obj) {
                var pages = Math.ceil(value.length / size); // 页数;
                var tank = _.groupBy(value, function(value, key, list) {
                    return Math.floor(key / size);
                });

                for (var i = 0; i < pages; i++) {
                    var tankItem = $('<div class="item" data-item="' + key + '"></div>').appendTo(carouselInner);
                    if (i === 0) {
                        $('<li data-target="#carousel-example-generic3" data-slide-to="' + count + '">' + key + '</li>').appendTo(indicators);
                    }
                    count++;

                    _.each(tank, function(item, index, value) {
                        if (index == i) {
                            _.each(item, function(value, key, list) {
                                var html = '<div class="item-container col-sm-6 col-md-6 col-lg-6"><div class="zhiku-item"><span class="head"><img src="' + value.img + '" alt=""></span><span class="name">' + value.name + '</span><span class="info">' + value.info + '</span></div></div>';
                                $(html).appendTo(tankItem);
                            });
                        }
                    });
                }
            });

            carouselInner.find(".item-container").on({
                "mouseenter": function() {
                    $(this).addClass("status-hover");
                },
                "mouseleave": function() {
                    $(this).removeClass("status-hover");
                }
            });

            indicators.find(":first-child").addClass("active");
            carouselInner.find(".item").eq(0).addClass("active");

            carousel.on("slid.bs.carousel", function() {
                var item = $(this).find(".item.active").attr("data-item");
                switch (item) {
                    case "企业":
                        indicators.find("li:contains('企业')").addClass("active").siblings().removeClass("active");
                        break;
                    case "媒体":
                        indicators.find("li:contains('媒体')").addClass("active").siblings().removeClass("active");
                        break;
                    case "学术":
                        indicators.find("li:contains('学术')").addClass("active").siblings().removeClass("active");
                        break;
                    default:
                        indicators.find("li:contains('创意伙伴')").addClass("active").siblings().removeClass("active");
                        break;
                }
            });
        })();

        (function() {
            // 生成首页推荐内容
            loadCorsJson(common.HOMEINFO, function(data) {
                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                var news = _.findWhere(data, {
                    name: "动态"
                }).items;
                var newsTemplate = _.template(worksView);

                // 动态
                var newsFilter = _.filter(news, function(value, key, list) {
                    return key < 3;
                });
                _.each(newsFilter, function(item, i) {
                    item.imgurl = common.IMGDIR + item.logo;
                    item.url = "page/news-details.html?action=GetInformationById&id=" + item.id;
                    $("#js-wroks-container").append(newsTemplate(item));
                });
            });

            // services
            $(".product-list li").on({
                "mouseenter": function() {
                    $(this).css("z-index", 10000).addClass("status-hover");
                },
                "mouseleave": function() {
                    $(this).css("z-index", 10).removeClass("status-hover");
                }
            });
        })();
    });

})
