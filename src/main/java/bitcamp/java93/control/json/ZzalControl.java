package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.ZzalService;

@RestController
@RequestMapping("/zzal/")
public class ZzalControl {

	@Autowired ServletContext servletContext;
	@Autowired ZzalService zzalService;
	
	@RequestMapping("list")
	  public JsonResult list() throws Exception {
	    
	    HashMap<String,Object> dataMap = new HashMap<>();
	    dataMap.put("list", memberService.list());
	    
	    return new JsonResult(JsonResult.SUCCESS, dataMap);
	  }

	
	@RequestMapping("detail")
	public JsonResult detail(@RequestParam int no) throws Exception {
	  System.out.println(no);
		Member member = memberService.get(no);
		if (member == null) {
			return new JsonResult(JsonResult.FAIL, no + "번 회원이 없습니다.");
		}
		return new JsonResult(JsonResult.SUCCESS, member);
	}
	
	@RequestMapping("add")
  public JsonResult add(Member member) throws Exception {
	  System.out.println(member);
    memberService.add(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
	
	@RequestMapping("update")
  public JsonResult update(Member member) throws Exception {
	  memberService.update(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

}









