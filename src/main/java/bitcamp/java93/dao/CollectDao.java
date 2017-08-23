package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectDao {
  List<Collect> selectList(int no);
  List<Collect> subslist(int mno);
  List<Collect> publicList(int no);
  
  List<Collect> detialzzalList(HashMap<String, Object> map);
  List<Collect> temporaryzzalList(HashMap<String, Object> map);
  List<Collect> likezzal(int mno);
  int countAll();
  int subscnt(int cono);
  int zzalcnt(int cono);

  Collect selectOne(int no); // selectOne()
  Collect selectUser(int no);
  int insert(Collect collect);
  int delete(int no); // delete()
  int update(Collect collect);
  List<Collect> selectAllList(int no);

}
