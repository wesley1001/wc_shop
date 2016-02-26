<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'testupload.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="uploadify/uploadify.css" rel="stylesheet">
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="http://libs.baidu.com/jqueryui/1.8.22/jquery-ui.min.js"></script>
<link href="http://libs.baidu.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
<script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script type="text/javascript" src="uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript" src="js/createnewcom.jquery.js"></script>
</head>

<body>
	
	<input type="file" id="file_upload">
	<input type="button" value="上传"
		onclick="javascript:$('#file_upload').uploadify('upload','*')">
	<input type="button" value="取消上传"
		onclick="javascript:$('#file_upload').uploadify('cancel','*')">
	<div id="uploadfileQueue"></div>
	<div id="imgshow">
	</div>
</body>
</html>
