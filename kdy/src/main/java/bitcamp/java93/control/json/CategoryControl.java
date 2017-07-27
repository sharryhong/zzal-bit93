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
public class CategoryControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CategoryService categoryService;
  
  @RequestMapping("list")
  public JsonResult list(
      @RequestParam(defaultValue="1") int pageNo, 
      @RequestParam(defaultValue="5") int pageSize) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", categoryService.list(pageNo, pageSize));
    dataMap.put("totalCount", categoryService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
}









