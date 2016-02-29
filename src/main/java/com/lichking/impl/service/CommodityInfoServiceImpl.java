package com.lichking.impl.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lichking.itf.dao.ICommodityInfoDAO;
import com.lichking.itf.service.ICommodityInfoService;
import com.lichking.pojo.CommodityInfoPOJO;

@Service("CommodityInfoService")
public class CommodityInfoServiceImpl implements ICommodityInfoService {

	@Resource
	private ICommodityInfoDAO iCommodityInfoDAO;
	
	@Override
	public int insertComWithNull(CommodityInfoPOJO com) {
		return this.iCommodityInfoDAO.insertSelective(com);
	}

	@Override
	public List<CommodityInfoPOJO> selectByWhere(CommodityInfoPOJO com) {
		return this.iCommodityInfoDAO.selectByWhere(com);
	}

	
}
