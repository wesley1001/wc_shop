<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
<!--   
<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-2.0.0.min.js"></script>
<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-ui"></script>
<link href="http://www.francescomalagrino.com/BootstrapPageGenerator/3/css/bootstrap-combined.min.css" rel="stylesheet" media="screen">
<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/bootstrap.min.js"></script>
-->

<link href="/wc_shop/css/footer.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>首页</title>
</head>
<body>
<div class="container-fluid" id="XS">
	<div class="row-fluid">
		<div class="span12">
			<ul class="nav nav-tabs">
				<li class="active">
					<a href="#">首页</a>
				</li>
				<li>
					<a href="#">分类</a>
				</li>
				<li class="disabled">
					<a href="#">筛选</a>
				</li>
				<li class="dropdown pull-right">
					 <a href="#" data-toggle="dropdown" class="dropdown-toggle">详情<strong class="caret"></strong></a>
					<ul class="dropdown-menu">
						<li>
							<a href="#">购物车</a>
						</li>
						<li>
							<a href="#">我的订单</a>
						</li>
						<li>
							<a href="#">快递查询</a>
						</li>
					</ul>
				</li>
			</ul>
			<form class="form-search">
				<div><nobr>
					<input class="input-medium search-query" type="text" style="width:66%;height:30px" />
					<button class="btn" type="submit" style="margin:auto auto auto 5%">查找</button>
				</nobr></div>
			</form>
		</div>
	</div>
	<hr />
	<div class="row-fluid" id="content">
		<div class="shop_photos"></div>
		<div class="shop_info"></div>
		<div class="commodity_list"></div>
	</div>
</div>
<%@ include file="../footer.html" %>
<script type="text/javascript" src="/wc_shop/js/footer.js"></script>
</body>
<script type="text/javascript" src="http://libs.baidu.com/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="http://libs.baidu.com/jqueryui/1.8.22/jquery-ui.min.js"></script>
<link href="http://libs.baidu.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
<script type="text/javascript" src="http://libs.baidu.com/bootstrap/2.3.2/js/bootstrap.min.js"></script>
</html>
