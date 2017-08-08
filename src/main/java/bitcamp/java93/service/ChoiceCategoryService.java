package bitcamp.java93.service;  

import java.util.List;

import bitcamp.java93.domain.ChoiceCategory;

public interface ChoiceCategoryService {
  List<ChoiceCategory> list(int memberNumber) throws Exception;
  void add(ChoiceCategory choiceCategory) throws Exception;
  void remove(ChoiceCategory choiceCategory) throws Exception;
}
