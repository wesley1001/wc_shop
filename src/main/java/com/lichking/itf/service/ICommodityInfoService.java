package com.lichking.itf.service;

import java.util.List;

import com.lichking.pojo.CommodityInfoPOJO;

public interface ICommodityInfoService {

	public int insertComWithNull(CommodityInfoPOJO com);
	
	public List<CommodityInfoPOJO> selectByWhere(CommodityInfoPOJO com);
}
