package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.ReplyLike;
import bitcamp.java93.service.MemberService;
import bitcamp.java93.service.ReplyLikeService;

@RestController
@RequestMapping("/replylike/")
public class ReplyLikeControl {

  @Autowired ServletContext servletContext;
  @Autowired ReplyLikeService replyLikeService;
  @Autowired MemberService memberService;

  @RequestMapping("add")
  public JsonResult add(ReplyLike replyLike) throws Exception {
    System.out.println(replyLike);
    replyLikeService.add(replyLike);
    return new JsonResult(JsonResult.SUCCESS, replyLike);
  }

  @RequestMapping("delete")
  public JsonResult delete(ReplyLike replyLike) throws Exception {
    replyLikeService.remove(replyLike);
    return new JsonResult(JsonResult.SUCCESS, replyLike);
  }

  @RequestMapping("isLike")
  public JsonResult list(ReplyLike replyLike) throws Exception {
    System.out.println(replyLike);
    ReplyLike l = replyLikeService.list(replyLike);
    if (l == null) {
      return new JsonResult(JsonResult.FAIL, replyLike);
    }
    return new JsonResult(JsonResult.SUCCESS, replyLike);
  }

  @RequestMapping("allLikeList")
  public JsonResult allLikeList(int memberNumber) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", replyLikeService.allLikeList(memberNumber));
    System.out.println(dataMap);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("countLikeReply")
  public JsonResult countLikeReply(int replyNumber) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("countLikeReply", replyLikeService.countLikeReply(replyNumber));

    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  //  
  //  @RequestMapping("delete")
  //  public void delete(ChoiceCategory choiceCategory) throws Exception {
  //    String[] arrNum = choiceCategory.getUnCategoryNumberArray();
  //    String no;
  //    for (int i=0; i < arrNum.length; i++) {
  //      no = arrNum[i];
  //      choiceCategory.setCategoryNumber(Integer.parseInt(no));
  //      choiceCategoryService.remove(choiceCategory);
  //    }
  //  }
}









