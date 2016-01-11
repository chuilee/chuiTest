require(["../../common/config"], function() {
    require([
        "underscore",
        "jquery",
        "text!templates/about/job.html",
        "common",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/header-footer"
    ], function(_, $, jobView, common) {
        // 左侧菜单栏交互
        (function(){
            // sidebar fixed
            $("#js-lists").affix({
                offset: {
                    top: 382
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
            duration: 800 // milliseconds
        });

        (function(){
            $.ajax({
                url: common.JOBS,
                success: function(data){
                    var jobs = JSON.parse(data).rows,
                        template = _.template(jobView);
                    _.each(jobs, function(job,i){
                        $("#js-jobs-container").append(template(job));
                    });
                },
                error: function(jqXHR, textStatus, err){
                }
            })
        })();

    });
});
