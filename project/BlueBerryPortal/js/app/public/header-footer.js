define(["underscore",
        "jquery",
        "text!templates/public/header.html",
        "text!templates/public/footer.html",
        "jqurl"
    ],
    function(_, $, headerView, footerView) {
        $("#page-header").append(headerView);
        $("#page-footer").append(footerView);
    })
