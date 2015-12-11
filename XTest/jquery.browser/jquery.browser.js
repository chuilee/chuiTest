
var TCXIAOYI ={};
TCXIAOYI.Browser = {
    IE: !!( window.attachEvent && !window.opera ),
    IE6: (/msie\s*(\d+)\.\d+/g.exec(navigator.userAgent.toLowerCase()) || [0, "0"])[1] == "6",
    IE7: navigator.userAgent.indexOf('MSIE 7.0') > -1,
    IE8: navigator.userAgent.indexOf('MSIE 8.0') > -1,
    IE9: navigator.userAgent.indexOf('MSIE 9.0') > -1
};
(function($){
    $.checkBrowser = function(options){
        var settings = $.extend({}, $.checkBrowser.defaults,options);
        var	browser="<div id='m-browser-layer'></div>";
        browser+="<div id='m-browser'>";
        browser+="<div class='title'>使用一款<strong>优质浏览器</strong>，上网冲浪更加<strong>安全，快捷</strong>！</div>";
        browser+="<p>您正在使用的浏览器内核版本过低，除了有可能遭受病毒与恶意软件的侵袭之外，也无法体验到最新互联网技术带来的优质显示与交互效果。"+settings.project+"大量使用了HTML5与CSS3技术，为确保您能够体验到最佳的浏览效果，我们推荐您选择使用下列最新的优质浏览器：</p>";
        browser+=" <div class='downloading'>";
        $.each(settings.browsers,function(index,element){
            browser+="<a href='"+element.href+"' target='_blank'><img src='"+element.icon+"' /> </a>";
        });
        browser+=" </div></div>";
        if(TCXIAOYI.Browser.IE){
            if(TCXIAOYI.Browser.IE6 || TCXIAOYI.Browser.IE7 || TCXIAOYI.Browser.IE8 ){
                $("body").append(browser);
                var H = $(document).height();
                var H2 = $(window).height();
                if(H>=H2){
                    $('#m-browser-layer').height(H)
                } else{
                    $('#m-browser-layer').height(H2)
                }
            }
        }
    };
    $.checkBrowser.defaults = {
        project:"复合人才网",
        browsers:[
            {href:"http://www.firefox.com.cn/download/",icon:"../images/firefox.png"},
            {href:"http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html",icon:"../images/chrome.png"},
            {href:"http://windows.microsoft.com/zh-cn/internet-explorer/ie-11-worldwide-languages/",icon:"../images/ie.png"},
            {href:"http://support.apple.com/kb/DL1531",icon:"../images/safari.png"}
        ]
    };
})(jQuery);
