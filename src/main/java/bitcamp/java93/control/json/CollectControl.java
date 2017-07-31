package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Collect;
import bitcamp.java93.domain.ZzalLike;
import bitcamp.java93.service.CollectService;

@RestController
@RequestMapping("/collect/")
public class CollectControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CollectService collectService;
  
  @RequestMapping("list")
  public JsonResult list(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.list(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("detail")
  public JsonResult detail(@RequestParam int no) throws Exception {
    System.out.println(no);
    Collect collect = collectService.get(no);
    /*if (collect == null) {
      return new JsonResult(JsonResult.FAIL, no + "번 Collection이 없습니다.");
    }*/
    return new JsonResult(JsonResult.SUCCESS, collect);
  }
  
  @RequestMapping("add")
  public JsonResult add(int memNo, 
                        String title, 
                        String content, 
                        String picture,
                        Collect collect) throws Exception {
    collect.setNo(memNo);
    collect.setContent(content);
    collect.setTitle(title);
    collect.setPicture(picture);
    System.out.println(collect);
    collectService.add(collect);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
 /* 
  @RequestMapping(value="dousubs", method = RequestMethod.POST)
  public JsonResult DoUSubscribe(@RequestParam int cono,
		  				   @RequestParam int mno
		  				   ,Collect collect) throws Exception {
    
    collect.setNo(cono);
    collect.setMemNo(mno);;
    	
   collectService.subsList(collect);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
*/
  
  
  
  
  
}









