package bitcamp.java93.dao;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;

public interface ZzalwriteDao {
  int insert(Zzal zzal);
  int insertPage(Page page);
  /*void insertPhoto(Map<String,Object> valueMap);*/
}
