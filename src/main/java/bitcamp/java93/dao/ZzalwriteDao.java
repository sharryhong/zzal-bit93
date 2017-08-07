package bitcamp.java93.dao;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;

public interface ZzalwriteDao {
  int insert(Zzal zzal);
  void insertPage(Page page);
  Zzal getZzalNo();
  /*void insertPhoto(Map<String,Object> valueMap);*/
}
