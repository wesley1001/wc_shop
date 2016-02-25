$("#modal").on("hidden.bs.modal", function() {
    $(this).removeData("bs.modal");
});

$("#modal").on('show.bs.modal', function (){
	$.ajax({
		url:"/wc_shop/back/data/getAllTypes",
		contentType : 'application/json;charset=utf-8',
		type:"post",
		success:function(data){
			console.log(data);
			var types = data.t;
			var content = "";
			for(var i=0;i<types.length;i++){
				content += "<label>"+(i+1)+":"+types[i].type+"</label>";
			}
			$(".typeshow").html(content);
		}
	});	
});