package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Category;

public interface CategoryService {
  List<Category> list(int pageNo, int pageSize) throws Exception;
  int getSize() throws Exception;
}
