var imgNames = [];
var editor;
var comid;
$("#com_load").bind("click",function(){
	var id = $("#hide").text();
	getTypesAndCreate();
	editor = CKEDITOR.replace('editor2');
	getAndPutComInfo(id);
	//$("#a1").hide();
	var $up = "<input type=\"file\" name=\"uploadify\" id=\"uploadify\" />"+  
      "<a class=\"btn btn-primary\" href=\"javascript:$('#uploadify').uploadify('upload','*')\">开始上传</a>&nbsp;"+     
      "<a class=\"btn btn-primary\" href=\"javascript:$('#uploadify').uploadify('cancel','*')\">取消上传</a>";
      $up += "<div id=\"uploadfileQueue\"></div>";
	$("#upload").html($up);
    $("#uploadify").uploadify({
        'auto':false,
        //在此时间后，若服务器未响应，则默认为成功(因为已经上传,等待服务器的响应) 单位：秒
        'successTimeout':99999,
        'swf': "/wc_shop/uploadify/uploadify.swf",
        'queueID':'uploadfileQueue',
        'fileObjName':'pic',
       	'uploader':'/wc_shop/back/upload/uploadImage',
       //'uploader':'/wc_shop/test/testupload',
       	'buttonText':'选择文件',
        'width':'100',
        'height':'32',
        'fileTypeDesc':'支持的格式：',
        'fileTypeExts':'*.jpg;*.jpge;*.gif;*.png' ,
        'cancelImg' : '/wc_shop/uploadify/uploadify-cancel.png',
        'fileSizeLimit':'500KB',
        'queueSizeLimit' : 3,
        'onSelect' : function(file) {
        },
        'onSelectError':function(file, errorCode, errorMsg){
            switch(errorCode) {
                case -100:
                    alert("上传的文件数量已经超出系统限制的"
                     +$('#file_upload').uploadify('settings','queueSizeLimit')+"个文件！");
                    break;
                case -110:
                    alert("文件 ["+file.name+"] 大小超出系统限制的"
                     +$('#file_upload').uploadify('settings','fileSizeLimit')+"大小！");
                    break;
                case -120:
                    alert("文件 ["+file.name+"] 大小异常！");
                    break;
                case -130:
                    alert("文件 ["+file.name+"] 类型不正确！");
                    break;
            }
        },
        'onUploadSuccess':function(file, data, response){
            imgNames.push(data);
            $("#imgshow").append("<img id=\"smallimg\" src=\"/wc_shop/upload/image/"+data+"\"></img>");
        },
        'onUploadError': function (file, errorCode, errorMsg, errorString) { 
        	alert("上传失败");
        	} 
    });
    
});
$("#save").bind("click",function(){

	var imgUrl = "";
	if(imgNames.length == 0){
		alert("请上传商品照片！");
		return;
	}
	for(var i=0;i<imgNames.length;i++){
		var tmp = "/wc_shop/upload/image/"+ imgNames[i];
		imgUrl += tmp + ";";
	}
	var obj = {
		commodityid : comid,
		name : $("#comname").val(),
		descsimple : $("#simpledesc").val(),
		imageurl : imgUrl,
		price : $("#comprice").val(),
		descdetails : editor.document.getBody().getHtml(),
		type : $("#types option:selected").text()
	};
	var msg = validate(obj);
	if(msg == "0"){
		$.ajax({
			url : '/wc_shop/back/data/updateComByPKSelective',
			data: JSON.stringify(obj),
			contentType : 'application/json;charset=utf-8',
			type:"post",
			success:function(data){
				var result = data.result;
				var msg = data.msg;
				if(result){
					alert(msg);
					$("#modal").modal("hide");
				}else{
					alert(msg);
				}
			}
		});
	}else{
		alert(msg);
	}
});
function validate(obj){
	var msg = "";
	var price = obj.price;
	if (isNaN(price) || price.length == 0)
		msg += "价格中请输入正确的数字!<br />";
	if (obj.name.length == 0)
		msg += "请输入商品名称！<br />";
	if (obj.descsimple.length == 0)
	    msg += "请输入商品的简要描述！<br />";
	if (obj.descdetails.length ==0)
		msg += "请输入商品的详细描述！<br />";
	if (msg.length == 0 )
		msg = "0";
	
	return msg;
	
}
function getTypesAndCreate(){
	var types = [];
	$.ajax({
		url:"/wc_shop/back/data/getAllTypes",
		contentType : 'application/json;charset=utf-8',
		type:"post",
		success:function(data){
			var type_arr = data.t;
			for(var i=0;i<type_arr.length;i++){
				types.push(type_arr[i].type);
				//alert(types);
			}
			createSelection(types);
		}
	});	
	
}
function createSelection(types){
	var innerhtml = "";
	for(var i=0;i<types.length;i++){
		innerhtml += "<option value=\""+types[i]+"\">"+types[i]+"</option>";
	}
	//alert(innerhtml);
	$("#types").append(innerhtml);
}

function getAndPutComInfo(id){
	$.ajax({
		url:"/wc_shop/back/data/queryComByPK",
		contentType : 'application/json;charset=utf-8',
		data : JSON.stringify(id),
		type:"post",
		success:function(data){
			if(data.result){
				var com = data.t;
				//alert(com);
				putComInfo(com);
			}else{
				alert("获取该商品信息失败，请稍后再试！");
			}
			
		}
	});
}

function putComInfo(com){
	$("#comname").val(com.name);
	$("#comprice").val(com.price);
	$("select").val(com.type);
	$("#simpledesc").val(com.descsimple);
	comid = com.commodityid;
	var urls = com.imageurl;
	//alert(urls);
	var url = urls.split(";");
	for(var i=0;i<url.length-1;i++){
		$("#imgshow").append("<img id=\"smallimg\" src=\""+url[i]+"\"></img>");
		var temp = url[i].split("/");
		var temp2 = temp[temp.length-1];
		var imgname = temp2.substr(0,temp2.length);
		imgNames.push(imgname);
	}
	$(".cke_editable cke_editable_themed cke_contents_ltr cke_show_borders").html(com.descdetails);
	//alert(com.descdetails);
	//var element = CKEDITOR.dom.element.createFromHtml('<p>hello</p>');
	//alert(element);
	//CKEDITOR.instances.editor2.insertElement(element);
	//CKEDITOR.instances.editor2.setData("Hello World!");
	//editor.insertHtml("<p>hello</p>");
	//var editorElement = CKEDITOR.document.getById( 'editor2' );
	//editorElement.setHtml();
}

$("#reupload").bind("click",function(){
	$("#imgshow").html("");
	imgNames = [];
});