package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectDao {
  List<Collect> selectList(int no);
  int countAll();
  Collect selectOne(int no); // selectOne()
  int insert(Collect collect);
  int delete(int no); // delete()
  int update(Collect collect);
//  void subslist(Collect collect);
}
