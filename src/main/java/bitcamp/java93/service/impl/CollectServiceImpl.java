package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CollectDao;
import bitcamp.java93.domain.Collect;
import bitcamp.java93.service.CollectService;

@Service
public class CollectServiceImpl implements CollectService {

	@Autowired
	CollectDao collectDao;

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
  public void remove(int no) throws Exception {
    /*collectDao.deletePhoto(no);*/
    
    int count = collectDao.delete(no);
    
    if (count < 1) {
      throw new Exception(no + "번 회원을 삭제하지 못했습니다.");
    }
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



}
