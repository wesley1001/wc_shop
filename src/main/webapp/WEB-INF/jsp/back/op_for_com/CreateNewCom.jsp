<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html>
<head>
<link href="../css/createnewcom.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../uploadify/uploadify.css"/>
</head>
<body>
	<script type="text/javascript"
		src="../uploadify/jquery.uploadify.js"></script>
	 
	<script type="text/javascript" src="../js/createnewcom.jquery.js"></script>
	
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="myModalLabel" align="center">新增商品</h4>
		</div>
		<div class="modal-body">
			<div class="inner_boder">
				<div class="first_line">
					<span>商品名称：</span><input type="text" size="16" id="comname" /> <span>商品单价：</span><input
						type="text" size="16" id="price" />
				</div><br />
				<div class="second_line">
					<span>商品简要描述：</span><input type="text" size="70" id="simpledesc" />
				</div><br />
				<div class="third_line">
					<div id="activate">
						<span>上传商品封面照:</span>
						<a id="a1">上传</a>
					</div>
					<div id="upload">
						
					</div>
					<div id="imgshow"></div>
					<div class="richtexteditor"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭
				</button>
				<!--
	<button type="button" class="btn btn-primary">提交</button>
	-->
			</div>
		</div>
		
</body>
</html>