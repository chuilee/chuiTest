(function(window, document) {
    "use strict";

    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // 寄生组合式继承
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }

    function inheritPrototype(subType, superType) {
        var prototype = object(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }



    /**
     * { 活动剩余时间 }
     *
     * @class
     * @param      {<string>}  deadline  { 截止时间 "2015-12-11 10:11:11" }
     */
    function TimeRemaing(deadline) {

        var eventsTime = document.getElementById("events-time");

        var end = new Date(deadline);
        var t_d = document.getElementById("t_d");
        var t_h = document.getElementById("t_h");
        var t_m = document.getElementById("t_m");
        var t_s = document.getElementById("t_s");

        function getRTime(end) {
            var start = new Date();
            var endTime = end.getTime();
            var startTime = start.getTime();
            var remainTime = endTime - startTime;

            var t_d = Math.floor(remainTime / (1000 * 60 * 60 * 24));
            var t_h = Math.floor(remainTime / (1000 * 60 * 60) % 24);
            var t_m = Math.floor(remainTime / (1000 * 60) % 60);
            var t_s = Math.floor(remainTime / 1000 % 60);

            return [t_d, t_h, t_m, t_s];
        }

        setTimeout(function() {

            var remainTimeArr = getRTime(end);
            if (remainTimeArr[0] > 0) {
                t_d.innerHTML = remainTimeArr[0] + "天";
                t_h.innerHTML = remainTimeArr[1] + "小时";
                t_m.innerHTML = remainTimeArr[2] + "分";
                t_s.innerHTML = remainTimeArr[3] + "秒";

                window.setTimeout(arguments.callee, 1000);
            } else {
                eventsTime.innerHTML = "活动已结束";
            }

        }, 1000);
    }

})(window, document);
