define(["jquery"],function(e){var t=function(t,n){if(document.attachEvent&&window.XDomainRequest){if(window.XDomainRequest){var r=new XDomainRequest,i=t;r&&(r.onload=function(){n(r.responseText)},r.onerror=function(){},r.open("GET",i),r.send(null))}}else e.ajax({type:"GET",url:t,success:function(e){n(e)},error:function(e,t,n){}})};return t});