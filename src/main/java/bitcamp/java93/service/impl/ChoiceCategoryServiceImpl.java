package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ChoiceCategoryDao;
import bitcamp.java93.domain.ChoiceCategory;
import bitcamp.java93.service.ChoiceCategoryService;

@Service
public class ChoiceCategoryServiceImpl implements ChoiceCategoryService {

  @Autowired
  ChoiceCategoryDao choiceCategoryDao;

  @Override
  public List<ChoiceCategory> list(int memberNumber) throws Exception  {
    return choiceCategoryDao.selectList(memberNumber);
  }
  
  @Override
  public void add(ChoiceCategory choiceCategory) throws Exception {
    choiceCategoryDao.insert(choiceCategory);
  }
  
  @Override
  public void remove(ChoiceCategory choiceCategory) throws Exception {
    choiceCategoryDao.deleteCategory(choiceCategory);
  }
  
} 
