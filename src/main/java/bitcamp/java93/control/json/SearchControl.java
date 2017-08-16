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

@RestController
@RequestMapping("/search/")
public class SearchControl {

	@Autowired ServletContext servletContext;
	@Autowired SearchService searchService;


	//	
	@RequestMapping("found")
	public JsonResult zzalSearch(@RequestParam(defaultValue="")String keyword) throws Exception {
		
		HashMap<String,Object> dataMap = new HashMap<>();
		dataMap.put("zzalList", searchService.searchlist(keyword));

		return new JsonResult(JsonResult.SUCCESS, dataMap);
	}
	@RequestMapping("autosearch")
	public JsonResult zzalSearch() throws Exception {
		
		HashMap<String,Object> dataMap = new HashMap<>();
		dataMap.put("zzalList", searchService.getAutoList());
		

		return new JsonResult(JsonResult.SUCCESS, dataMap);
	}


}









