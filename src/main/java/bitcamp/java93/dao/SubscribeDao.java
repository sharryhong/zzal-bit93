package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Subscribe;

public interface SubscribeDao {
  Subscribe getList(Map<String,Object> valueMap);
  Subscribe getCono(Subscribe subscribe);
  void insertColct(Subscribe subscribe);
  void deleteColct(Subscribe subscribe);
}
