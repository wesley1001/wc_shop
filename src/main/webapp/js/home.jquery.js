$(document).ready(function(){
	$url = "json/getGoods.json";
	$.ajax({
		url: $url,
		dataType: "json",
		contentType:"application/json",
		success: function(data){
			
		}
	});
});