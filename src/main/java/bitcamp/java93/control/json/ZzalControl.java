package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.service.ZzalLikeService;
import bitcamp.java93.service.ZzalService;

@RestController
@RequestMapping("/zzal/")
public class ZzalControl {

	@Autowired ServletContext servletContext;
	@Autowired ZzalService zzalService;
	
	@RequestMapping("list")
	  public JsonResult list(@RequestParam int zzno) throws Exception {
	    
	    HashMap<String,Object> dataMap = new HashMap<>();
	    dataMap.put("list", zzalService.list(zzno));
	    
	    return new JsonResult(JsonResult.SUCCESS, dataMap);
	  }
	
	@RequestMapping("zzalList")
	public JsonResult zzalList(
      @RequestParam(defaultValue="1") int pageNo, 
      @RequestParam(defaultValue="5") int pageSize) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", zzalService.zzalList(pageNo, pageSize));
    dataMap.put("totalCount", zzalService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }

}









