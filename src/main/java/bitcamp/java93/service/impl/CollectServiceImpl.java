package bitcamp.java93.service.impl;

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

	/*@Transactional(propagation=Propagation.REQUIRED)*/
	@Override
  public void remove(int no) throws Exception {
    /*collectDao.deletePhoto(no);*/
    
    int count = collectDao.delete(no);
    
    if (count < 1) {
      throw new Exception(no + "번 회원을 삭제하지 못했습니다.");
    }
  } // remove()
	
	@Override
  public List<Collect> selectzzalList(int mno) throws Exception {
    return collectDao.selectzzalList(mno);
  }
	
	@Override
  public List<Collect> temporaryzzalList(int mno) throws Exception {
    return collectDao.temporaryzzalList(mno);
  }

  @Override
  public List<Collect> likezzal(int mno) throws Exception {
    return collectDao.likezzal(mno);
  }
	
	/*@Override
  public void hitCountUp(Collect collect) throws Exception {
    int count = collectDao.hitCountUp(collect);
    if (count < 1) {
      throw new Exception(collect.getZzno() + "번 짤강을 찾을 수 없습니다.");
    }
  }*/
	
	/*@Override
  public List<Collect> myzzalList(int mno) throws Exception {
    return collectDao.myzzalList(mno);
  }*/
	
	
	/*@Override
  public void subsList(Collect collect) {
    // TODO Auto-generated method stub
    collectDao.subslist(collect);
  }
   */
	
}
