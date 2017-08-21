package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Search;

public interface SearchService {
  List<Search> searchlist(String keyword,int pageNo, int pageSize) throws Exception;
  List<String> getAutoList() throws Exception;
  int getcount(String keyword,int pageNo);
}
