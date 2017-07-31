package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.service.CategoryService;

@RestController
@RequestMapping("/category/")
public class SubscribeControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CategoryService categoryService;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", categoryService.list());
    dataMap.put("totalCount", categoryService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
}









