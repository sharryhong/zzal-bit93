package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Categori;

public interface CategoriDao {
  List<Categori> selectList(Map<String,Object> valueMap);
  int countAll();
}
