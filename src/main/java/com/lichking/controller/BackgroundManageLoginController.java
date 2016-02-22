package com.lichking.controller;

import java.util.logging.Logger;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lichking.itf.service.IUserService;
import com.lichking.pojo.ResultPOJO;
import com.lichking.pojo.UserPOJO;

@Controller
@RequestMapping("/back")
public class BackgroundManageLoginController {

	@Resource
	private IUserService userService;
	
	private Logger log = Logger.getLogger("BackgroundLogger");
	
	@SuppressWarnings("rawtypes")
	@RequestMapping("/check_psw")
	public @ResponseBody ResultPOJO doLogin(@RequestBody UserPOJO userpojo,HttpServletRequest req){
		log.info("请求路径：/back/check_psw");
		UserPOJO user = this.userService.getUser(userpojo.getUsername());
		String psw = user.getPassword();
		//log.info("username:"+userpojo.getUsername()+"\t db_username:"+user.getUsername());
		//log.info("password:"+userpojo.getPassword()+"\t db_password:"+user.getPassword());
		ResultPOJO<UserPOJO> resultPOJO = new ResultPOJO<UserPOJO>();
		if(psw.equals(userpojo.getPassword())){
			log.info("检查正确");
			req.getSession().setAttribute("currentUser", user.getUsername());
			resultPOJO.setResult(true);
			resultPOJO.setMsg("登录成功!");
			return resultPOJO;
		}else{
			log.info("检查错误");
			resultPOJO.setResult(false);
			resultPOJO.setMsg("用户名密码错误！");
			return resultPOJO;
		}
	}
	
	@RequestMapping("/login")
	public String Login(){
		log.info("请求路径：/back/login");
		return "back/login";
	}
	
	@RequestMapping("/manage")
	public String Manage(HttpServletRequest req){
		log.info("请求路径：/back/manage");
		String user = (String) req.getSession().getAttribute("currentUser");
		if(user == null){
			log.info("用户为空，重定向至:/back/login");
			return "redirect:login";
		}else{
			return "back/manage";
		}
	}
	
}
