package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CategoryDao;
import bitcamp.java93.domain.Category;
import bitcamp.java93.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
  
  @Autowired
  CategoryDao categoryDao;

  @Override
  public List<Category> list() throws Exception {
    return categoryDao.selectList();
  }
  
  @Override
  public int getSize() throws Exception {
    return categoryDao.countAll();
  }

}
