package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.DyMember;
import bitcamp.java93.service.DyMemberService;

@RestController
@RequestMapping("/dymember/")
public class DyMemberControl {
  
  @Autowired ServletContext servletContext;
  @Autowired DyMemberService dyMemberService;
  
  @RequestMapping("list")
  public JsonResult list(
      @RequestParam(defaultValue="1") int pageNo, 
      @RequestParam(defaultValue="5") int pageSize) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", dyMemberService.list(pageNo, pageSize));
    dataMap.put("totalCount", dyMemberService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("detail")
  public JsonResult detail(@RequestParam int no) throws Exception {
    DyMember dyMember = dyMemberService.get(no);
    if (dyMember == null) {
      throw new Exception(no + "번 회원이 없습니다.");
    }
    
        return new JsonResult(JsonResult.SUCCESS, dyMember);
        
  }
}









