package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Zzal;
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
	
	@RequestMapping("zzalListWithCount")
	public JsonResult zzalList(int pageNo, int pageSize) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", zzalService.zzalListWithCount(pageNo, pageSize));
    dataMap.put("totalCount", zzalService.getSize());
    dataMap.put("foundRows", zzalService.foundRows());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
	
	@RequestMapping("zzalBestList")
  public JsonResult zzalBestList() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", zzalService.zzalBestList());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
	
	@RequestMapping("zzalLikeRank")
  public JsonResult zzalLikeRank() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", zzalService.zzalLikeRank());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
	
	@RequestMapping("zzalViewRank")
  public JsonResult zzalViewRank() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("zzalList", zzalService.zzalViewRank());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
	
	@RequestMapping("hitCountUpdate")
  public JsonResult hitCountUpdate(Zzal zzal, HttpSession session) throws Exception {
    zzalService.hitCountUpdate(zzal);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

}









