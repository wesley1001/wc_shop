<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Bootstrap 实例 - 模态框（Modal）插件事件</title>
<link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css"
	rel="stylesheet">
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
</head>
<body>

	<h2>模态框（Modal）插件事件</h2>

	<!-- 按钮触发模态框 -->
	<a data-toggle="modal" href="ComOverview" data-target="#modal">Click
		me</a>
	<div class="modal fade" id="modal" tabindex="-1" role="dialog"
		aria-labelledby="modal" aria-hidden="true" style="width:80%;margin:auto auto auto auto;overflow:hidden;padding-top:30px;">
		<div class="modal-content"></div>
	</div>

</body>
</html>