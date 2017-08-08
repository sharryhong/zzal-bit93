package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.ChoiceCategory;

public interface ChoiceCategoryDao {
  List<ChoiceCategory> selectList(int memberNumber);
  void insert(ChoiceCategory choiceCategory);
  void deleteCategory(ChoiceCategory choiceCategory);
}
