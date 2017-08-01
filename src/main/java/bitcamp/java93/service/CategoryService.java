package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Category;

public interface CategoryService {
  List<Category> list() throws Exception;
  int getSize() throws Exception;
  
  void remove(int no) throws Exception; // remove()
}
