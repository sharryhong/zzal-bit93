package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectDao {
  List<Collect> selectList(int no);
  List<Collect> publicList(int no);
  List<Collect> selectzzalList(int mno);
  List<Collect> temporaryzzalList(int mno);
  /*int hitCountUp(Collect collect);*/
  /*List<Collect> myzzalList(int mno);*/
  int countAll();
  Collect selectOne(int no); // selectOne()
  int insert(Collect collect);
  int delete(int no); // delete()
  int update(Collect collect);
//  void subslist(Collect collect);
  List<Collect> likezzal(HashMap<String, Object> valueMap);
  List<Collect> likezzal(int mno);
}
