package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Subscribe;
import bitcamp.java93.service.SubscribeService;

@RestController
@RequestMapping("/subs/")
public class SubscribeControl {

	@Autowired ServletContext servletContext;
	@Autowired SubscribeService subscribeService;

	@RequestMapping("list")
	public JsonResult list(int mno, int cono, Subscribe subscribe) throws Exception {
		System.out.println(cono);
		System.out.println(mno);
		subscribe.setCollectNo(cono);
		subscribe.setMemberno(mno);
		HashMap<String,Object> dataMap = new HashMap<>();
		dataMap.put("list", subscribeService.list(subscribe));

		return new JsonResult(JsonResult.SUCCESS, dataMap);
	}


	@RequestMapping("insert")
	public JsonResult addSubs(int mno, int cono, Subscribe subscribe) throws Exception {
		subscribe.setCollectNo(cono);
		subscribe.setMemberno(mno);
		subscribeService.addCollec(subscribe);

		return new JsonResult(JsonResult.SUCCESS, "ok");
	}


	@RequestMapping("delete")
	public JsonResult deleteSubs(int mno, int cono, Subscribe subscribe) throws Exception {
		subscribe.setCollectNo(cono);
		subscribe.setMemberno(mno);
		subscribeService.deleteCollec(subscribe);

		return new JsonResult(JsonResult.SUCCESS, "ok");
	}


}









