package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectDao {
  List<Collect> selectList(int no);
  int countAll();
}
