require([
    "underscore",
    "jquery",
    "loadCorsJson",
    "text!templates/index/works.html",
    "text!templates/index/news.html",
    "common",
    "bootstrap"
], function(_, $, loadCorsJson, worksView, newsView, common) {

    (function() {
        // 生成首页推荐内容
        loadCorsJson(common.HOMEINFO, function(data) {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            var works = _.findWhere(data, {
                    name: "案例"
                }).items,
                news = _.findWhere(data, {
                    name: "动态"
                }).items;
            var worksTemplate = _.template(worksView),
                newsTemplate = _.template(newsView);

            // 案例
            _.each(works, function(work, i) {
                if (i < 3) {
                    work.imgurl = common.IMGDIR + work.logo;
                    work.url = "page/works-details.html?id=" + work.id;
                    $("#js-wroks-container").append(worksTemplate(work));
                }
            });

            // 新闻
            _.each(news, function(item, i) {
                if (i < 4) {
                    item.imgurl = common.IMGDIR + item.logo;
                    item.url = "page/news-details.html?action=GetInformationById&id=" + item.id;
                    $("#js-news-list").append(newsTemplate(item));
                }
            });
        });
    })();
});