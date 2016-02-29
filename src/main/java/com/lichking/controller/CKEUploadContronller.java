package com.lichking.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 * CKEditor富文本编辑器 中 图片上传的控制
 * @author LichKing
 *
 */
@Controller
@RequestMapping("/back/ckeupload")
public class CKEUploadContronller {

	/*
	 *  图片命名格式
	 */
	private static final String DEFAULT_SUB_FOLDER_FORMAT_AUTO = "yyyyMMddHHmmss";

	
	protected Logger logger = Logger.getLogger(CKEUploadContronller.class);
	/*
	 * 项目绝对路径
	 */
	//private static  final String PROJECT_PATH="D:/apache-tomcat-8.0.23/webapps/wc_shop";
	/*
	 * 上传图片文件夹
	 */
	private static final String UPLOAD_PATH="/upload/cke_image/";


	/*
	 *  上传图片
	 */
	@RequestMapping("uploadImg")
	public void uplodaImg(@RequestParam("upload")MultipartFile file,//
			HttpServletRequest request, //
			HttpServletResponse response,//
			@RequestParam("CKEditorFuncNum")String CKEditorFuncNum)//
			throws IllegalStateException, IOException{
		logger.info("请求cke图片上传");
		PrintWriter out =response.getWriter();
		String fileName=file.getOriginalFilename();
		String uploadContentType =file.getContentType();
		String expandedName ="";
		if (uploadContentType.equals("image/pjpeg")  
                || uploadContentType.equals("image/jpeg")) {  
            // IE6上传jpg图片的headimageContentType是image/pjpeg，而IE9以及火狐上传的jpg图片是image/jpeg  
            expandedName = ".jpg";  
        } else if (uploadContentType.equals("image/png")  
                || uploadContentType.equals("image/x-png")) {  
            // IE6上传的png图片的headimageContentType是"image/x-png"  
            expandedName = ".png";  
        } else if (uploadContentType.equals("image/gif")) {  
            expandedName = ".gif";  
        } else if (uploadContentType.equals("image/bmp")) {  
            expandedName = ".bmp";  
        } else {  
            out.println("<script type=\"text/javascript\">");  
            out.println("window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum  
                    + ",''," + "'文件格式不正确（必须为.jpg/.gif/.bmp/.png文件）');");  
            out.println("</script>");  
            return ;  
        }  
		if (file.getSize()> 600 * 1024) {  
            out.println("<script type=\"text/javascript\">");  
            out.println("window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum  
                    + ",''," + "'文件大小不得大于600k');");  
            out.println("</script>");  
            return ;  
		}
		DateFormat df = new SimpleDateFormat(DEFAULT_SUB_FOLDER_FORMAT_AUTO);
		fileName = df.format(new Date())+expandedName;
		//file.transferTo(new File(PROJECT_PATH+UPLOAD_PATH +fileName));
		file.transferTo(new File(request.getSession().getServletContext()
				.getRealPath(UPLOAD_PATH) +fileName));
        // 返回"图像"选项卡并显示图片  request.getContextPath()为web项目名   
        out.println("<script type=\"text/javascript\">");  
        out.println("window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum  
                + ",'" + "/wc_shop/upload/cke_image/" + fileName + "','')");  
        out.println("</script>");  
        return ;  
	}
	
}
