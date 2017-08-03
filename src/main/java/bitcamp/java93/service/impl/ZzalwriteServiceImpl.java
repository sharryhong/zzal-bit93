package bitcamp.java93.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ZzalwriteDao;
import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalwriteService;

@Service
public class ZzalwriteServiceImpl implements ZzalwriteService {

	@Autowired
	ZzalwriteDao zzalwriteDao;

	@Override
	public void add(Zzal zzal) throws Exception {
		zzalwriteDao.insert(zzal);
		/*this.insertPhoto(zzal.getZzno(), zzal.getMainPic()); */
	}

	@Override
	public void pageAdd(Page page) throws Exception {
		zzalwriteDao.insertPage(page);

	}

	/*private void insertPhoto(int zzno, String mainPic) {
    if (mainPic == null)
      return;

    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("zzno", zzno);

    valueMap.put("mainPic", mainPic);
    zzalwriteDao.insertPhoto(valueMap);
  }*/
}
