package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.ChoiceCategory;
import bitcamp.java93.service.ChoiceCategoryService;
import bitcamp.java93.service.MemberService;

@RestController
@RequestMapping("/choicecategory/")
public class ChoiceCategoryControl {
  
  @Autowired ServletContext servletContext;
  @Autowired ChoiceCategoryService choiceCategoryService;
  @Autowired MemberService memberService;

  
  @RequestMapping("list")
  public JsonResult list(int memberNumber) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", choiceCategoryService.list(memberNumber));
//    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("add")
  public JsonResult add(ChoiceCategory choiceCategory) throws Exception {
    choiceCategoryService.add(choiceCategory);
    return new JsonResult(JsonResult.SUCCESS, choiceCategory);
  }
  
  @RequestMapping("delete")
  public void delete(ChoiceCategory choiceCategory) throws Exception {
//    String[] arrNum = choiceCategory.getUnCategoryNumberArray();
//    String no;
//    for (int i=0; i < arrNum.length; i++) {
//      no = arrNum[i];
//    }
    choiceCategoryService.remove(choiceCategory);
//    choiceCategory.setCategoryNumber(Integer.parseInt(no));
  }
  
  
}









