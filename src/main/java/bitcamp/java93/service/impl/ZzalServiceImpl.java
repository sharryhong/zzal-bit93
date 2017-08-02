package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ZzalDao;
import bitcamp.java93.dao.ZzalLikeDao;
import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalService;

@Service
public class ZzalServiceImpl implements ZzalService {
	
	@Autowired ZzalDao zzalDao;
	@Autowired ZzalLikeDao zzalLikeDao;
	
	@Override
	public List<Zzal> list(int zzno) throws Exception {
		return zzalDao.selectList(zzno);
	}

  @Override
  public List<Zzal> zzalListWithCount(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    return zzalDao.zzalListWithCount(valueMap);
  }
  
  /*@Override // DB에서 서브쿼리 사용하지 않을 때 
  public List<Zzal> zzalListWithCount(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    List<Zzal> list = zzalDao.zzalListWithCount(valueMap);
    for (Zzal zzal : list) {
      zzal.setLikeCount(zzalLikeDao.getcnt(zzal.getZzno()));
    }
    return list;
  }*/

  @Override
  public int getSize() throws Exception {
    return zzalDao.countAll();
  }
	  	
}
