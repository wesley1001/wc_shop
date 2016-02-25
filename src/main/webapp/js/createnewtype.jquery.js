$("#add").bind("click",function(){
	var typespojo = {
		type : $("#addType").val()
	};
	$.ajax({
		url : "/wc_shop/back/data/addTypes",
		data : JSON.stringify(typespojo),
		contentType : 'application/json;charset=utf-8',
		type : "post",
		success : function(data){
			var result = data.result;
			var msg = data.msg;
			var types = data.t;
			if(result){
				$(".show_msg").html("<p align=\"center\" style=\"color:#0F0\">"+msg+"</p>");
			}else{
				$(".show_msg").html("<p align=\"center\" style=\"color:#F00\">"+msg+"</p>");
			}
			var content = "";
			for(var i=0;i<types.length;i++){
				content += "<label>"+(i+1)+":"+types[i].type+"</label>";
			}
			$(".typeshow").html(content);
		}
	});
});
