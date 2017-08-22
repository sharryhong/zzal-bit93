package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ZzalDao;
import bitcamp.java93.dao.ZzalLikeDao;
import bitcamp.java93.domain.Member;
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
  public List<Zzal> selectListPages(int zzno) throws Exception {
    return zzalDao.selectListPages(zzno);
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

	public List<Zzal> zzalListMyCategory(int pageNo, int pageSize, String[] categoryNumberArray) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    valueMap.put("categoryNumberArray", categoryNumberArray);
    return zzalDao.zzalListMyCategory(valueMap);
  }
	
	public List<Zzal> zzalListCategory(int pageNo, int pageSize, int cno) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    valueMap.put("cno", cno);
    return zzalDao.zzalListCategory(valueMap);
  }
  
  @Override
  public List<Zzal> zzalBestList() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    return zzalDao.zzalBestList(valueMap);
  }
  
  @Override
  public List<Zzal> zzalBestCategoryList(int cno) throws Exception {
    return zzalDao.zzalBestCategoryList(cno);
  }
  
  @Override
  public List<Zzal> zzalListOthers(int mno) throws Exception {
    return zzalDao.zzalListOthers(mno);
  }
  
  @Override
  public List<Zzal> zzalLikeRank() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    return zzalDao.zzalLikeRank(valueMap);
  }
  
  @Override
  public List<Zzal> zzalViewRank() throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    return zzalDao.zzalViewRank(valueMap);
  }
  
  @Override
  public void hitCountUpdate(Zzal zzal) throws Exception {
    int count = zzalDao.hitCountUpdate(zzal);
    if (count < 1) {
      throw new Exception(zzal.getZzno() + "번 짤강을 찾을 수 없습니다.");
    }
  }
  
  @Override
  public List<Zzal> zzalListNew(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    return zzalDao.zzalListNew(valueMap);
  }
  
  @Override
  public int getSize() throws Exception {
    return zzalDao.countAll();
  }
  @Override
  public int foundRows() throws Exception {
    return zzalDao.foundRows();
  }
  @Override
  public int foundRowsCatetory(int cno) throws Exception {
    return zzalDao.foundRowsCatetory(cno);
  }
	  	
}
