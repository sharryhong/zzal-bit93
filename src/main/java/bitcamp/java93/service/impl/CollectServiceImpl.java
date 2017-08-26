package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CollectDao;
import bitcamp.java93.dao.NoticeDao;
import bitcamp.java93.dao.SubscribeDao;
import bitcamp.java93.domain.Collect;
import bitcamp.java93.domain.Subscribe;
import bitcamp.java93.service.CollectService;

@Service
public class CollectServiceImpl implements CollectService {

	@Autowired
	CollectDao collectDao;
	@Autowired
	SubscribeDao subscribeDao;
	@Autowired
	NoticeDao noticeDao;
	
	@Override
	public List<Collect> list(int no) throws Exception {
		return collectDao.selectList(no);
	}
	
	@Override
  public List<Collect> subslist(int mno) throws Exception {
    return collectDao.subslist(mno);
  }
	
	@Override
  public List<Collect> publiclist(int no) throws Exception {
    return collectDao.publicList(no);
  }
	
	@Override
	public int getSize() throws Exception {
		return collectDao.countAll();
	}

	@Override
	public Collect get(int no) throws Exception {
		return collectDao.selectOne(no);
	} // get()

	@Override
  public void add(Collect collect) throws Exception {
    collectDao.insert(collect);
  }
	
	@Override
  public void update(Collect collect) throws Exception {
    int count = collectDao.update(collect);
    if (count < 1) {
      throw new Exception(collect.getNo() + "번 회원을 찾을 수 없습니다.");
    }
  }

	@Override
  public void remove(Subscribe subscribe) throws Exception {
    /*collectDao.deletePhoto(no);*/
	  System.out.println("----------------");
	  try {
//	    HashMap<String, Object> map = new HashMap<>();
//	    map.put("dmno", subscribe.getMemberno());
//	    map.put("cono", subscribe.getCollectNo());
//	    map.put("notype", "subs");
//	    System.out.println(map);

	    
	    collectDao.deleteNotice(subscribe);
      
    } catch (Exception e) {
      // TODO: handle exception
    }
	  subscribeDao.deleteSubs(subscribe);
	  
	  collectDao.updatefordelete(subscribe.getCollectNo());
	  
	  collectDao.delete(subscribe.getCollectNo());

    System.out.println("ddd");
  } // remove()
	
	@Override
  public List<Collect> selectzzalList(HashMap<String, Object> map) throws Exception {
    return collectDao.temporaryzzalList(map);
  }
	
	@Override
  public List<Collect> temporaryzzalList(HashMap<String, Object> map) throws Exception {
    return collectDao.temporaryzzalList(map);
  }

  @Override
  public List<Collect> likezzal(int mno) throws Exception {
    return collectDao.likezzal(mno);
  }

@Override
public List<Collect> detialzzalList(HashMap<String, Object> map) throws Exception {
	
	return  collectDao.detialzzalList(map);
}

@Override
public Collect selectUser(int no) {
  // TODO Auto-generated method stub
  return collectDao.selectUser(no);
}



@Override
public HashMap<String, Object> getcount(int cono) {
  // TODO Auto-generated method stub
  HashMap<String, Object> map =new HashMap<>(); 
  map.put("scnt",collectDao.subscnt(cono));
  map.put("zcnt",collectDao.zzalcnt(cono));
  
  return map;
}

@Override
public List<Collect> selectAllList(int no) throws Exception {
  return collectDao.selectAllList(no);
}


}
