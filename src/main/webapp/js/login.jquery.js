$(function (){
	$("#login_btn").bind("click",function (){
		var username = $("#username").val();
		var psw = $("#password").val();
		if(username == ""){
			$("#msg").html("<p>请输入用户名</p>");
			return false;
		}
		if(psw == ""){
			$("#msg").html("<p>请输入密码</p>");
			return false;
		}
		var psw_en = hex_sha1(psw);
		var userpojo = {
			username : $("#username").val(),
			password : psw_en
		};
		$.ajax({
			url:"/wc_shop/back/check_psw",
			data:JSON.stringify(userpojo),
			contentType : 'application/json;charset=utf-8',
			type:"post",
			success:function(data){
				var result = data.result;
				var msg = data.msg;
				if(result){
					window.location.href = "/wc_shop/back/manage";	
				}else{
					$("#msg").html("<p>"+msg+"</p>");
					$("#username").val(username);
					$("#password").val("");
				}
				
			}
		});
	});
});