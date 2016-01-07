define(['jquery',
        'text!templates/public/pagination.html'
    ],
    function($, paginationHtml) {

        var pagination = function(target, options) {

            var state = $(target).data("pagination");
            if (state)
                state.optons = $.extend(true, state.options, options);
            else {
                state = {
                    options: {}
                };
                state.options = $.extend(true, $.fn.pagination.defaults, options);
            }

            $(target).data("pagination", state);
            var opt = this.opt = state.options;

            var maxPageSize = state.options.maxPageSize;

            // $.template('pagination', paginationHtml);
            // $.tmpl('pagination', {}).appendTo(target);
            var template = _.template(paginationHtml);

            $(target).html(template({}));

            $(opt.next).bind("click", function() {

                var cur = $(target).pagination("options");
                if (cur.pageNumber < cur.maxPageSize) {
                    cur.pageNumber += 1;
                    cur.onChange(cur.pageNumber, cur.pageSize);
                }
            });
            $(opt.prev).bind("click", function() {
                var cur = $(target).pagination("options");
                if (cur.pageNumber > 1) {
                    cur.pageNumber -= 1;
                    cur.onChange(cur.pageNumber, cur.pageSize);
                }
            });
            $(opt.input).bind('keydown', function(event) {
                if (event.keyCode == 13) {
                    var cur = $(target).pagination("options");
                    var pageIndex = $(this).val();
                    if (isNaN(pageIndex))
                        pageIndex = 1;
                    if (pageIndex > cur.maxPageSize) {
                        pageIndex = cur.maxPageSize;
                        $(this).val(pageIndex);
                    }
                    cur.pageNumber = pageIndex;
                    cur.onChange(cur.pageNumber, cur.pageSize);
                }
            });
            $(opt.query).bind('click', function() {
                var pageIndex = $(opt.input).val();
                var cur = $(target).pagination("options");
                var pageIndex = $(opt.input).val();
                if (isNaN(pageIndex))
                    pageIndex = 1;
                    $(opt.inputs).val(pageIndex);
                if (pageIndex > cur.maxPageSize) {
                    pageIndex = cur.maxPageSize;
                    $(opt.inputs).val(pageIndex);
                }
                cur.pageNumber = pageIndex;
                cur.onChange(cur.pageNumber, cur.pageSize);
            });
        }
        var resetPage = function() {};
        var resolveTotal = function(jq, options, count) {
            var opt = options
            if (isNaN(count)) {
                resetPage();
            } else {
                total = count;
                if (total % opt.pageSize == 0)
                    maxPageSize = total / opt.pageSize;
                else
                    maxPageSize = Math.floor(total / opt.pageSize) + 1;
                $(opt.total).text(maxPageSize);
                options.maxPageSize = maxPageSize;
                $(jq).pagination("options", options);
                showTab(jq, options, total);
            }
        }
        var showTab = function(jq, options, total) {

            var opt = options
            var pageIdx = opt.pageNumber;
            var startPage = Math.max(1, (pageIdx - 3));
            var endPage = Math.min(startPage + opt.pageSize, ((total - 1) / opt.pageSize));
            $(jq).find(".page-index ").css('display', 'none');
            for (var pIndex = startPage; pIndex <= (endPage + 1); pIndex++) {
                $(jq).find(".page-index" + (pIndex - startPage)).find('a').text(pIndex);
                $(jq).find(".page-index" + (pIndex - startPage)).css('display', 'block');
            }
            $(".web-pagination .active").removeClass("active");
            $(jq).find(".page-index" + (opt.pageNumber - startPage)).addClass("active");
            bindTabChange(jq, options);
        }

        var bindTabChange = function(jq, options) {
            var opt = options
            $(jq).find(".page-index").bind('click', function() {
                var pageIndex = $(this).text();
                if (!isNaN(pageIndex)) {
                    if (opt.pageNumber != parseInt(pageIndex)) {
                        opt.pageNumber = parseInt(pageIndex)
                        opt.onChange(opt.pageNumber, opt.pageSize);
                    }
                }
            })
        }
        $.fn.pagination = function(options, param) {

            if (typeof options == "string") {
                return $.fn.pagination.methods[options](this, param);
            } else {
                //var opt = $.extend(true, $.fn.pagination.defaults, options);
                return this.each(function() {
                    var ins = new pagination(this, options);
                });
            }
        }
        $.fn.pagination.parseOptions = function(target, options) {
            if (state)
                state = $.extend(true, state.options, options);
            else
                state = $.extend(true, $.fn.pagination.defaults, options);
            return state;
        }
        $.fn.pagination.defaults = {
            total: 0,
            pageSize: 10,
            pageNumber: 1,
            pageList: [10, 20, 30, 50, 100],
            displayMsg: 1,
            first: "",
            target: ".web-gridview",
            prev: ".Previous",
            current: ".current",
            next: ".Next",
            last: "",
            input: "#txtCurrentPage",
            query: "#btnQuery",
            total: "#pageTotal",
            onChange: function(pageNumber, pageSize) {}
        };
        $.fn.pagination.methods = {
            options: function(jq, options) {
                if (options) {
                    $(jq).data('pagination', {
                        options: options
                    });
                } else {
                    return $(jq).data('pagination').options;
                }
            },
            setTotalCount: function(jq, count) {
                var options = this.options(jq);
                resolveTotal(jq, options, count);
            }
        }
    });
