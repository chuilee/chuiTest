require(["../../../common/config"], function() {
    require([
        "jquery",
        "app/index/content"
    ], function($) {
        var k = 0;
        for (var i in partners) {
            for (var j in partners[i]) {
                var $html = "<li class='list-item'><div class='fanzhuan'><a target='_blank' href=''><div class='fanzhuan1'></div><div class='fanzhuan2 gimc-color'></div></a></div></li>";

                $("#liContainer").append($html);

                $(".fanzhuan>a>.fanzhuan1:eq(" + k + ")").addClass(partners[i][j].stylename);
                $(".fanzhuan>a>.fanzhuan2:eq(" + k + ")").addClass(partners[i][j].stylename + "-color");
                $(".fanzhuan>a:eq(" + k + ")").attr("href", "http://" + partners[i][j].url);

                k++;
                $("." + partners[i][j].stylename).css("background", "url(/page/" + partners[i][j].logo + ") no-repeat center");
                $("." + partners[i][j].stylename + "-color").css({
                    "background": "url(/page/" + partners[i][j].logo_active + ") no-repeat center"
                });

            }
        }

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
    });
})
