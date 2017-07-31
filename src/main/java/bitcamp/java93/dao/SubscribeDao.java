package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Category;

public interface SubscribeDao {
  List<Category> selectList();
  int countAll();
}
