package bitcamp.java93.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.NoticeDao;
import bitcamp.java93.dao.SubscribeDao;
import bitcamp.java93.domain.Subscribe;
import bitcamp.java93.service.SubscribeService;
@Service
public class SubscribeServiceImpl implements SubscribeService {
	@Autowired SubscribeDao subscribeDao;
	@Autowired
	NoticeDao noticeDao;
	@Override
	public Subscribe list(int mno, int cono) throws Exception {
	  HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("mno", mno);
    valueMap.put("cono", cono);
		return subscribeDao.getList(valueMap);
	}

	@Override
	public void addCollec(Subscribe subscribe) {
		// TODO Auto-generated method stub
		subscribeDao.insertColct(subscribe);
		noticeDao.insSubsNotice(subscribe);
	}

	@Override
	public void deleteCollec(Subscribe subscribe) {
		// TODO Auto-generated method stub
		subscribeDao.deleteColct(subscribe);
	}

	@Override
	public Subscribe getCono(Subscribe subscribe) {
		
		return subscribeDao.getCono(subscribe);
	}

	
	


}
