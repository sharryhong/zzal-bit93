package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Search;

public interface SearchDao {
  List<Search> searchList(String keyword);
  List<String> getNick();
  List<String> getTitl();
  List<String> getCont();
}