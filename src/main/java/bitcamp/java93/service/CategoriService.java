package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Categori;

public interface CategoriService {
  List<Categori> list(int pageNo, int pageSize) throws Exception;
  int getSize() throws Exception;
  
  void remove(int no) throws Exception;

  //  Teacher get(int no) throws Exception;
//  Teacher getByEmailPassword(String email, String password) throws Exception;
//  void add(Teacher teacher) throws Exception;
//  void update(Teacher teacher) throws Exception;
}







