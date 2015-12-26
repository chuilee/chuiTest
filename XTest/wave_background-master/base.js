require(["../../common/config.js"], function(){

    require(["jquery", "VProgress"], function($){
        $(function(){
            var progress = new VProgress();
            progress.setValue(4);
        });
    });

})