define(["jquery"], function($) {
    //如果浏览器支持requestAnimFrame则使用requestAnimFrame否则使用setTimeout  
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var VProgress = function(opts) {

        var defaults = {
            value: 0,
            ratios: 10
        };

        this.options = $.extend({}, defaults, opts);

        this.canvas = document.getElementById('canvas');  
        this.ctx = canvas.getContext('2d');  
        this.canvas.width = this.canvas.parentNode.offsetWidth;  
        this.canvas.height = this.canvas.parentNode.offsetHeight;

        this.createCanvas(this.options.value, this.options.ratios);
        
    };

    VProgress.prototype.init = function() {

    };

    VProgress.prototype.createCanvas = function() {

        var ctx = this.ctx;
        var canvas = this.canvas;
        var value = this.options.value;
        var ratios = this.options.ratios;
        var grow = canvas.height / ratios;
        var r = canvas.height/2;
        var horizontal, pos_y, pos_lx, pos_rx, s_angle, e_angle;

        if (arguments.length && typeof arguments[0] == "number") {
            value = arguments[0];
            horizontal = horizontal - value * grow;

            if (value / ratios < 0.25) {
                horizontal = 0.75 * canvas.height;
            } else {
                horizontal = canvas.height - value / ratios * canvas.height;
            }

            a = Math.sqrt(r*r - (r-horizontal)*(r-horizontal));
            pos_lx = r - a;
            pos_rx = r + a;
            s_angle = Math.atan2(horizontal - r, pos_rx - r);
            e_angle = Math.PI - s_angle;

            console.log(s_angle)
        }

        if (arguments.length > 1 && typeof arguments[1] == "number") {
            ratios = arguments[1];
        }

        //初始角度为0  
        var step = 0;
        //定义三条不同波浪的颜色  
        var lines = ["rgba(0,222,255, 0.4)",
            "rgba(157,192,249, 0.4)",
            "rgba(0,168,255, 0.4)"
        ];

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            step++;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(r, r, r, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(35, 24, 21, .4)";
            ctx.fill();
            ctx.closePath();

            if (value > 0) {
                //画3个不同颜色的矩形  
                for (var j = lines.length - 1; j >= 0; j--) {
                    ctx.fillStyle = lines[j];
                    //每个矩形的角度都不同，每个之间相差45度  
                    var angle = (step + j * 45) * Math.PI / 180;
                    var deltaHeight = Math.sin(angle) * 15;
                    var deltaHeightRight = Math.cos(angle) * 15;
                    ctx.beginPath();
                    ctx.moveTo(pos_lx, horizontal);

                    if (value / ratios == 1) {
                        ctx.bezierCurveTo(pos_lx, horizontal, pos_rx, horizontal, canvas.width, horizontal);
                    } else {
                        ctx.bezierCurveTo(canvas.width / 4, horizontal + deltaHeight, canvas.width / 4 * 3, horizontal + deltaHeightRight, pos_rx, horizontal);
                    }

                    // ctx.lineTo(canvas.width, canvas.height);
                    // ctx.lineTo(pos_lx, canvas.height);
                    // ctx.lineTo(pos_lx, canvas.height / 2 + deltaHeight);
                    ctx.arc(r, r, r, s_angle, e_angle);
                    ctx.closePath();
                    ctx.fill();
                }
            }

            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.font = "36px Arial";
            ctx.fillText(value + "/" + ratios, r, 1.2*r);

            requestAnimFrame(loop);
        }
        loop();
    };

    VProgress.prototype.setValue = function() {
        if (arguments.length && typeof arguments[0] == "number") {
            this.createCanvas(arguments[0]);
        }
    };

    window.VProgress = VProgress;

});

