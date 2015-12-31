requirejs.config({
    baseUrl: "../../../lib/",
    paths: {
        js: "../assets/js",
        app: "../js/app",
        models: "../js/models",
        templates: "../js/templates",
        jquery: "../../../lib/jquery/dist/jquery-1.11.3.min",
        fullPage: "../../../lib/fullpage.js/jquery.fullPage.min",
        bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min",
        bootstrap_dropdown: "bootstrap-sass/assets/javascripts/bootstrap/dropdown",
        bootstrap_tab: "bootstrap-sass/assets/javascripts/bootstrap/tab",
        bootstrap_carousel: "bootstrap-sass/assets/javascripts/bootstrap/carousel",
        bootstrap_affix: "bootstrap-sass/assets/javascripts/bootstrap/affix",
        underscore: "underscore/underscore-min",
        backbone: "backbone/backbone-min",
        partners: "../assets/js/jsonData",
        text: "requirejs-text/text",
        common: "../common/common",
        jqurl: "../assets/js/plugins/jquery.url",
        content: "../js/app/index/content",
        loadCorsJson: "../assets/js/loadCorsJson"
    },
    shim: {
        underscore: {
            exports: "_"
        },

        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },

        bootstrap: ["jquery"],
        bootstrap_dropdown: ["jquery"],
        bootstrap_tab: ["jquery"],
        bootstrap_carousel: ["jquery"],
        bootstrap_affix: ["jquery"],
        jqurl: ["jquery"],
        fullPage: ["jquery"]
    }
});

require([
    "jquery",
    "content",
    "fullPage",
    "partners"
], function($) {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        scrollingSpeed: 1000,
        css3: true,
        afterRender: function() {
            $("#product").show();
            $("#success").show();
            $("#dynamic").show();
            $("#partner").show();
            $("#about").show();
            $("#contact").show();
            $(".more").css("display", "block");
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
        }
    });
});
