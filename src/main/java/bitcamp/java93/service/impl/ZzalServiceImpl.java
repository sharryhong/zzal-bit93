package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ZzalDao;
import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalService;

@Service
public class ZzalServiceImpl implements ZzalService {
	
	@Autowired
	ZzalDao zzalDao;
	
	@Override
	public List<Zzal> list(int zzno) throws Exception {
		return zzalDao.selectList(zzno);
	}

  @Override
  public List<Zzal> zzalList(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    
    return zzalDao.zzalList(valueMap);
  }

  @Override
  public int getSize() throws Exception {
    return zzalDao.countAll();
  }
	  	
}
