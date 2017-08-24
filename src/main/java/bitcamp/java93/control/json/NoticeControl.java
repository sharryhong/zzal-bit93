package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.service.NoticeService;



@RestController
@RequestMapping("/notice/")
public class NoticeControl {
@Autowired ServletContext servletContext;
  @Autowired NoticeService noticeService;
  
  @RequestMapping("list")
  public JsonResult noticelist(int mno) throws Exception {
    
	 System.out.println(mno);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", noticeService.list(mno));
//    dataMap.put("totalCount", categoryService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("count")
  public JsonResult noticeCnt(int mno) throws Exception {
    
	 System.out.println(mno);
    
    
//    dataMap.put("totalCount", categoryService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, noticeService.getcount(mno));
  }
  
  @RequestMapping("delete")
  public JsonResult noticeDel(int nono) throws Exception {
	  
    noticeService.deleteNo(nono);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  @RequestMapping("update")
  public JsonResult noticeUpd(int mno) throws Exception {
    noticeService.updateYnn(mno);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
}









