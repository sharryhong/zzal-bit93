package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

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
	public int getSize() throws Exception {
		return collectDao.countAll();
	}

	@Override
	public Collect get(int no) throws Exception {
		return collectDao.selectOne(no);
	} // get()

	/*@Override
	public void subsList(Collect collect) {
		// TODO Auto-generated method stub
		collectDao.subslist(collect);
	}
*/
	@Override
  public void add(Collect collect) throws Exception {
    collectDao.insert(collect);
  }


	@Transactional(propagation=Propagation.REQUIRED)
  public void remove(int no) throws Exception {
    /*collectDao.deletePhoto(no);*/
    
    int count = collectDao.delete(no);
    
    if (count < 1) {
      throw new Exception(no + "번 회원을 삭제하지 못했습니다.");
    }
  } // remove()
}
