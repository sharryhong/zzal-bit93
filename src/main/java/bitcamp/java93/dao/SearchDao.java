package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Search;

public interface SearchDao {
  List<Search> searchList(HashMap<String,Object> map);
  List<String> getNick();
  List<String> getTitl();
  List<String> getCont();
  int searchCountAll(HashMap<String,Object> map);
}