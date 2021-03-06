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
  public int getSize() throws Exception {
    return collectDao.countAll();
  }


}
