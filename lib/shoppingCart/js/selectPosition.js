;(function($, M, window, document, undefined){

	$.fn.selectPositions = function(opts){

		var defaults = {
			items: 12,
			max: 3,
			completed: $.noop,
			select: $.noop
		};

		var options = $.extend({}, defaults, opts);
		var $that = $(this);

		var selectedPositions = [];
			this.selectedPositions = selectedPositions;
		// [{index：1, item: 2, text: "1111"}]

		// 创建已选职位按钮
		var btnPositions = document.createElement("a");
			btnPositions.setAttribute("href", "javascript:;");
			btnPositions.setAttribute("id", "btn-positions");

		var btnPositionsIcon = document.createElement("i");
			btnPositionsIcon.setAttribute("class", "lmhicons lmh-icon-label");

		var selectedPositionsTotal = document.createElement("span");
			selectedPositionsTotal.setAttribute("class", "selected-positions");

			btnPositions.appendChild(btnPositionsIcon);
			btnPositions.appendChild(selectedPositionsTotal);

		var $btnPositions = $(btnPositions).addClass("mui-hidden animated").appendTo($("body"));

		// 显示已选职位
		var changedPositions = [];
		var deletedPostions = [];
		$btnPositions.on("tap", function(e){
			// $.each(selectedPositions, function(i, element){
			// 	changedPositions[i] = element;
			// })
			var _selectedItemHtml = "";
			$.each(selectedPositions, function(i,element){

				_selectedItemHtml += '<span class="selected-position mui-badge" data-itemsindex='+ element.itemsIndex +' data-itemindex='+ element.itemIndex +'>'+ element.itemText +' <i class="lmhicons lmh-icon-cancel"></i></span>'

			});

			$positionsContainer.html(_selectedItemHtml);

			$positionsContainer.find(".lmhicons").on("tap", function(){
				var $_parent = $(this).parent();

				// console.log($_parent.attr("data-options"))
				// var _options = JSON.parse($_parent.attr("data-options"));

				var _itemsIndex = $_parent.attr("data-itemsindex");
				var _itemIndex = $_parent.attr("data-itemindex");
				$_parent.remove();

				deletedPostions.push({itemsIndex: _itemsIndex, itemIndex: _itemIndex});

			});


			M_dialogWrapper.popover("toggle");
		});

		// 创建已选职位对话框
		$dialogWrapper = $('<div class="mui-popover popover-container positions-dialog" id="popover-container"></div>').appendTo($("body"));
		$('<div class="mui-text-center popover-title">已选行业职业</div><form class="mui-input-group"><div class="mui-input-row"></div><div class="mui-button-row"><button class="mui-btn mui-btn-grey" id="js-btn-positions-cancel" onclick="return false;">取消</button>&nbsp;&nbsp;<button class="mui-btn mui-btn-primary"  id="js-btn-positions-ok" onclick="return false;">确认</button></div></form>').appendTo($dialogWrapper);

		M_dialogWrapper = M("#popover-container");

		$positionsContainer = $dialogWrapper.find(".mui-input-row");

		$btnCancel = $dialogWrapper.find("#js-btn-positions-cancel");

		$btnOk = $dialogWrapper.find("#js-btn-positions-ok");

		$btnCancel.on("tap", function(){
			M_dialogWrapper.popover("toggle");
		});

		$btnOk.on("tap", function(){

			M_dialogWrapper.popover("toggle");

			if(deletedPostions.length){
				$.each(deletedPostions, function(i, element){
					var _itemsIndex = element.itemsIndex;
					var _itemIndex = element.itemIndex;

					$.each(selectedPositions, function(n, position){
						if(_itemIndex == position.itemIndex && _itemsIndex == position.itemsIndex ){
							selectedPositions.splice(n, 1);
						}
					});

					$that.eq(_itemsIndex).find(".position-item").eq(_itemIndex).removeClass("mui-active");
				})
			};

			selectedPositionsTotal.innerHTML = selectedPositions.length;

			deletedPostions = [];

			toggleSelectedBtn();

			if($.isFunction(options.confirm)){
				options.confirm(selectedPositions);
			}
		});

		options.completed(selectedPositions);



		return this.each(function(itemsIndex){
			var self = this;
			var $options = $(this).find(".position-item");

			var itemsTotal = $options.size();

			// 保存已经选中值 
			$.each($options, function(i, element){
				var $element = $(element);
				if($element.hasClass("mui-active")){
					
					var item_index = i;
					var items_index = itemsIndex;
					var item_id = $element.attr("id");
					var	item_text = $element.text();

					selectedPositions.push({itemId: item_id, itemIndex: item_index, itemText: item_text, itemsIndex: items_index})

				}
			})


			if(itemsTotal > options.items){

				self.$btnOpen = $("<div>").addClass("position-item btn-position-more");
				self.$btnOpenText = $("<span>").addClass("btn-position").text("展开").appendTo( self.$btnOpen );

				self.$btnClose = $("<div>").addClass("position-item btn-position-more mui-hidden");
				self.$btnCloseText = $("<span>").addClass("btn-position").text("收起").appendTo( self.$btnClose );

				self.$btnOpen.insertBefore( $options.eq(options.items-1) );
				self.$btnClose.insertAfter( $options.eq(itemsTotal-1) );



				$.each($options, function(index){

					if(index > options.items - 2){
						$(this).addClass("mui-hidden");
					}

				});

				// 展开
				self.$btnOpen.on("tap", function(){

					$(this).remove(); // 移除btnOpen，css选择器对隐藏元素依然生效

					self.$btnClose.removeClass("mui-hidden");

					$.each($options, function(index){

						if(index > options.items - 2){
							$(this).removeClass("mui-hidden");
						}

					});

				});

				// 收起
				self.$btnClose.on("tap", function(){

					$(this).addClass("mui-hidden");

					self.$btnOpen.insertBefore( $options.eq(options.items-1) );

					$.each($options, function(index){

						if(index > options.items - 2){
							$(this).addClass("mui-hidden");
						}

					});

				})
			}

			// 选择职位
			$(this).on("tap", function(e){

				var $target = $(e.target);

				if($target.parent().hasClass("position-item")){

					$target = $target.parent()

				};

				// 点击收起/展开按钮
				if($target.hasClass("btn-position-more")){
					return;
				}

				// 点击职位标签
				if($target.hasClass("position-item")){
					var index = itemsIndex;
					var item_index = $target.index();
					var item_text = $target.text(); 
					var item_id = $target.attr("id");

					if($target.hasClass("mui-active")){
						// 删除职位
						$target.removeClass("mui-active");
						$.each(selectedPositions, function(i, element){
							if(item_index == element.itemIndex && index == element.itemsIndex ){
								selectedPositions.splice(i, 1);
							}
						});

						options.select(selectedPositions.length);

					}else {
						if(selectedPositions.length == options.max){
							options.select(selectedPositions.length+1);
							return;
						}
						// 增加职位
						$target.addClass("mui-active");
						selectedPositions.push( {itemsIndex: index, itemIndex: item_index, itemText: item_text, itemId: item_id} );
						options.select(selectedPositions.length);
					} 

					

					toggleSelectedBtn();

				}

			});

			//  初始化已选按钮;
			if(itemsIndex == $that.size()-1){
				toggleSelectedBtn();
			}

		});

		// 显示/隐藏 已选按钮;
		function toggleSelectedBtn(){
			if(selectedPositions.length){
				$btnPositions.removeClass("mui-hidden fadeOut").addClass("fadeIn");
				selectedPositionsTotal.innerHTML = selectedPositions.length;
			}else{
				$btnPositions.removeClass("fadeIn").addClass("fadeOut");
				selectedPositionsTotal.innerHTML = selectedPositions.length;
			}
		}

	};

})(Zepto, mui, window, document, undefined)