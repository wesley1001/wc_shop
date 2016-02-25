<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link href="../css/createnewtype.css" rel="stylesheet">
</head>
<body>
<script type="text/javascript" src="../js/createnewtype.jquery.js"></script>
<div class="modal-content">
<div class="modal-header">
	<button type="button" class="close" data-dismiss="modal"
		aria-hidden="true">&times;</button>
	<h4 class="modal-title" id="myModalLabel" align="center">新增商品类型</h4>
</div>
<div class="modal-body">
	<div class="typecontainer">
		<p align="center">已有商品类型</p>
		<div class="typeshow">
			
		</div><br />
		<div class="add_area" align="center">
			<span class="before_add">请输入新增类型: </span>
			<input id="addType" type="text" name="addType" size=16 />
			<button class="btn" id="add">确定</button>
		</div><br />
		<div class="show_msg">
		
		</div>
	</div>
</div>
<div class="modal-footer">
	<!--  
	<button id="refresh" type="button" class="btn btn-primary"><i class="fa fa-refresh">刷新数据</i></button>
	-->
	<button type="button" class="btn btn-default" data-dismiss="modal">关闭
	</button>
	
	
</div>
</div>
</body>
</html>