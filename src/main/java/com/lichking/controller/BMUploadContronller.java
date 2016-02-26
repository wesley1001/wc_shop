package com.lichking.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.lichking.util.FileUtil;

@Controller
@RequestMapping("/back/upload")
public class BMUploadContronller {

	@RequestMapping(value = "uploadImage", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	@ResponseBody
	public String uploadFile(@RequestParam("pic") CommonsMultipartFile pic,
			HttpServletRequest req, HttpServletResponse response)
			throws IOException {
		// 设置文件保存的本地路径
		System.out.println("收到上传");
		String filePath = req.getSession().getServletContext()
				.getRealPath("/upload/image");
		String fileName = pic.getOriginalFilename();
		String fileType = fileName.split("[.]")[1];
		// 为了避免文件名重复，在文件名前加UUID
		String uuid = UUID.randomUUID().toString().replace("-", "");
		String uuidFileName = uuid + fileName;
		File f = new File(filePath + "/" + uuid + "." + fileType);
		// 将文件保存到服务器
		FileUtil.upFile(pic.getInputStream(), uuidFileName, filePath);
		return uuidFileName;
	}
}
