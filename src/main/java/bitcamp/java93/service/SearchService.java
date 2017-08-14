package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Notice;

public interface SearchService {
  List<Search> searchlist(String no) throws Exception;
  
}
