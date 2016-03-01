var flag = true;
$("#com_type").click(function(){
	if(flag){
		$.ajax({
			url:"/wc_shop/back/data/getAllTypes",
			contentType : 'application/json;charset=utf-8',
			type:"post",
			success:function(data){
				//console.log(data);
				var types = data.t;
				var content = "<option>全部</option>";
				for(var i=0;i<types.length;i++){
					content += "<option>"+types[i].type+"</option>";
				}
				$("#com_type").html(content);
				flag = false;
					
			}
		});
	}
});
$("#search").bind("click",function(){
	var selection = $("#com_type option:selected").text();
	//alert(selection);
	if(selection == "全部"){
		selection = null;
	}
	//alert(selection);
	var commodityinfopojo = {
		name : $("#search_name").val(),
		type : selection,
		descsimple : $("#search_desc").val()
	};
	$.ajax({
		url:"/wc_shop/back/data/queryComByWhere",
		data: JSON.stringify(commodityinfopojo),
		contentType : 'application/json;charset=utf-8',
		type:"post",
		success:function(data){
			var status = data.result;
			if(status){
				//alert("已进入");
				var com_list = data.t;
				var com_div = "";
				for(var i=0;i<com_list.length;i++){
					com_div += "<div class=\"com_border\">";
					com_div += "<div id=\""+com_list[i].commodityid+"_img\" class=\"image_border\"><img src=\""+
					com_list[i].imageurl+"\" style=\"width:180px;height:200px;\"></img></div>";
					com_div += "<div class=\"msg_ps_border\">";
					com_div += "<div class=\"msg_border\">";
					com_div += "<div class=\"desc_border\">"+com_list[i].name+"</div>";
					
					com_div += "<div id=\""+com_list[i].commodityid+"_op\" class=\"op_border\"><a>编辑</a>&nbsp;<a>删除</a></div>";
					com_div += "</div><div class=\"ps_border\">";
					com_div += "<div class=\"price_border\"><span id=\"price\">单价：<br />"+com_list[i].price+"</span></div>";
					com_div += "<div class=\"sell_border\"><span id=\"sellno\">已售：<br />"+com_list[i].sellno+"</span></div>";
					com_div += "</div></div></div>";
				}
				$(".com_show_area").html(com_div);
			}else{
				$(".com_show_area").html("");
			}
		}
	});
});