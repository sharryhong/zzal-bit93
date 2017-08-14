package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.SearchService;
import bitcamp.java93.service.ZzalService;

//@RestController
//@RequestMapping("/search/")
public class SearchControl {

//	@Autowired ServletContext servletContext;
//	@Autowired SearchService searchService;
	
//	@RequestMapping("list")
//	  public JsonResult list(@RequestParam int zzno) throws Exception {
//	    
//	    HashMap<String,Object> dataMap = new HashMap<>();
//	    dataMap.put("list", zzalService.list(zzno));
//	    
//	    return new JsonResult(JsonResult.SUCCESS, dataMap);
//	  }
//	
//	@RequestMapping("zzalListWithCount")
//	public JsonResult zzalList(int pageNo, int pageSize) throws Exception {
//    
//    HashMap<String,Object> dataMap = new HashMap<>();
//    dataMap.put("zzalList", zzalService.zzalListWithCount(pageNo, pageSize));
//    dataMap.put("totalCount", zzalService.getSize());
//    dataMap.put("foundRows", zzalService.foundRows());
//    return new JsonResult(JsonResult.SUCCESS, dataMap);
//  }
//	
	@RequestMapping("found")
  public JsonResult zzalSearch(@RequestParam(defaultValue="") String keyword) throws Exception {
    
		
		HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", searchService.searchlist(keyword));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
	
	
	
}









