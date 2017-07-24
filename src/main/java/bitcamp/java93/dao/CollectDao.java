package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Collect;

public interface CollectDao {
  List<Collect> selectList(Map<String,Object> valueMap);
  int countAll();
}
