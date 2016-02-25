package com.lichking.util.session;

import javax.servlet.http.HttpServletRequest;

public class UserJudge {

	public static boolean isAdmin(String session_name,HttpServletRequest req){
		String user = (String) req.getSession().getAttribute(session_name);
		if(user == null)
			return false;
		return true;
	}
	
}
