define(["jquery"], function($){
	var loadCorsJson = function(url, callback) {
        if (document.attachEvent && window.XDomainRequest) {
            if (window.XDomainRequest) {
                var xdr = new XDomainRequest();
                var query = url;
                if (xdr) {
                    xdr.onload = function() {
                        callback(xdr.responseText);
                    };
                    xdr.onerror = function() { /* error handling here */ };
                    xdr.open('GET', query);
                    xdr.send(null);
                }
            }
        } else {
            $.ajax({
                type: "GET",
                url: url,
                success: function(data) {
                    callback(data);
                },
                error: function(response, textStatus, errorThrown) {
                    // alert('not OK ' + response.responseText);
                    // alert('not OK ' + textStatus.responseText);
                    // alert('not OK ' + errorThrown);
                }
            });
        }
    };

    return loadCorsJson;
});