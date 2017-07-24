package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CategoriDao;
import bitcamp.java93.domain.Categori;
import bitcamp.java93.service.CategoriService;


@Service
public class CategoriServiceImpl implements CategoriService {
  
  @Autowired
  CategoriDao categoriDao;
  
  @Override
  public List<Categori> list(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("startIndex", (pageNo - 1) * pageSize);
    valueMap.put("pageSize", pageSize);
    return categoriDao.selectList(valueMap);
  }
  
  @Override
  public int getSize() throws Exception {
    return categoriDao.countAll();
  }

  @Override
  public void remove(int no) throws Exception {
    int count = categoriDao.delete(no);
    if (count < 1) {
      throw new Exception(no + "번 카테고리를 찾을 수 없습니다.");
    }
    
    try {
      count = memberDao.delete(no);
    } catch (Exception e) {}
  }
}







