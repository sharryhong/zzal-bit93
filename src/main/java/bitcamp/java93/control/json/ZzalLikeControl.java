package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.ZzalLike;
import bitcamp.java93.service.ZzalLikeService;

@RestController
@RequestMapping("/zzallike/")
public class ZzalLikeControl {

	@Autowired ServletContext servletContext;
	@Autowired ZzalLikeService zzalLikeService;
	
	
	@RequestMapping("count")
	  public JsonResult count(@RequestParam int zzno) throws Exception {
	    
	    HashMap<String,Object> dataMap = new HashMap<>();
	    dataMap.put("cnt", zzalLikeService.getcount(zzno));
	    
	    return new JsonResult(JsonResult.SUCCESS, dataMap);
	  }
	
	
	@RequestMapping("doulike")
	  public JsonResult isLike(@RequestParam int mno,
			  				   @RequestParam int zzno) throws Exception {
	    
	    HashMap<String,Object> dataMap = new HashMap<>();
	  
	    	
	   dataMap.put("doit",zzalLikeService.douLike(mno,zzno));
	    
	    return new JsonResult(JsonResult.SUCCESS, dataMap);
	  }
	
    @RequestMapping(value="loveu", method = RequestMethod.POST)
	  public JsonResult loveu(@RequestParam int mno,
			  				   @RequestParam int zzno
			  				   ,ZzalLike zzalLike) throws Exception {
	    
	    zzalLike.setMno(mno);
	    zzalLike.setZzno(zzno);
	    	
	   zzalLikeService.loveu(zzalLike);
	    
	    return new JsonResult(JsonResult.SUCCESS, "ok");
	  }

    @RequestMapping(value="notloveu", method = RequestMethod.POST)
	  public JsonResult notloveu(@RequestParam int mno,
			  				   @RequestParam int zzno
			  				   ,ZzalLike zzalLike) throws Exception {
	    
	    zzalLike.setMno(mno);
	    zzalLike.setZzno(zzno);
	    	
	   zzalLikeService.notloveu(zzalLike);
	    
	    return new JsonResult(JsonResult.SUCCESS, "ok");
	  }
    
   
//	
//	@RequestMapping("detail")
//	public JsonResult detail(@RequestParam int no) throws Exception {
//	  System.out.println(no);
//		Member member = memberService.get(no);
//		if (member == null) {
//			return new JsonResult(JsonResult.FAIL, no + "번 회원이 없습니다.");
//		}
//		return new JsonResult(JsonResult.SUCCESS, member);
//	}
//	
//	@RequestMapping("add")
//  public JsonResult add(Member member) throws Exception {
//	  System.out.println(member);
//    memberService.add(member);
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }
//	
//	@RequestMapping("update")
//  public JsonResult update(Member member) throws Exception {
//	  memberService.update(member);
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }

}









