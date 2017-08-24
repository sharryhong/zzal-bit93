package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;

public interface ZzalwriteDao {
  int insert(Zzal zzal); 
  void insertPage(Page page);
  void editInsertPage(Page page);
  Zzal getZzalNo();
  Zzal findtmpZzal(HashMap<String, Object>map);
  List<Page> findtmpPage(HashMap<String, Object>map);
  /*void insertPhoto(Map<String,Object> valueMap);*/
  void deletePage(HashMap<String, Object>map) throws Exception;
  void updateZzal(Zzal zzal) throws Exception;
}
