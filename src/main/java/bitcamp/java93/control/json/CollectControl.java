package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Collect;
import bitcamp.java93.service.CollectService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/collect/")
public class CollectControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CollectService collectService;
  
  @RequestMapping("list")
  public JsonResult list(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.list(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("publiclist")
  public JsonResult publiclist(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("publiclist", collectService.publiclist(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("detail")
  public JsonResult detail(int no) throws Exception {
    System.out.println(no);
    Collect collect = collectService.get(no);
    /*if (collect == null) {
      return new JsonResult(JsonResult.FAIL, no + "번 Collection이 없습니다.");
    }*/
    return new JsonResult(JsonResult.SUCCESS, collect);
  }
  
  @RequestMapping("add")
  public JsonResult add(Collect collect) throws Exception {
    System.out.println(collect);
    collectService.add(collect);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  @RequestMapping("update")
  public JsonResult update(Collect collect) throws Exception {
    System.out.println(collect);
    collectService.update(collect);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("delete")
  public JsonResult delete(int no) throws Exception {
    collectService.remove(no);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
    
  }
  
  @RequestMapping(path="upload")
  public JsonResult upload(MultipartFile[] files) throws Exception {
    ArrayList<String> fileList = new ArrayList<>();
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      String newFilename = this.getNewFilename()+files[i].getOriginalFilename();
      File file = new File(servletContext.getRealPath("/upload/" + newFilename));
      System.out.println(file.getCanonicalPath());
      files[i].transferTo(file);
      File thumbnail = new File(servletContext.getRealPath("/upload/"  +"500_"+ newFilename));
      Thumbnails.of(file).size(500, 500).toFile(thumbnail); 
      thumbnail = new File(servletContext.getRealPath("/upload/" + "800_"+ newFilename));
      Thumbnails.of(file).size(800, 800).toFile(thumbnail);
      System.out.println(newFilename);
      fileList.add(newFilename);
    }
    return new JsonResult(JsonResult.SUCCESS, fileList);
  }
  
  /* 
  @RequestMapping(value="dousubs", method = RequestMethod.POST)
  public JsonResult DoUSubscribe(@RequestParam int cono,
		  				   @RequestParam int mno
		  				   ,Collect collect) throws Exception {
    
    collect.setNo(cono);
    collect.setMemNo(mno);;
    	
   collectService.subsList(collect);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
   */
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
  
  @RequestMapping("selectzzalList")
  public JsonResult selectzzalList(int mno) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    map.put("mno", mno);
    map.put("tmp", false);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("selectzzalList", collectService.selectzzalList(map));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("temporaryzzalList")
  public JsonResult temporaryzzalList(int mno) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    map.put("mno", mno);
    map.put("tmp", true);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("temporaryzzalList", collectService.temporaryzzalList(map));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("likezzal")
  public JsonResult isLike( int mno) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    
   dataMap.put("likezzal",collectService.likezzal(mno));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  /*@RequestMapping("hitCountUp")
  public JsonResult hitCountUp(Collect collect, HttpSession session) throws Exception {
    collectService.hitCountUp(collect);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }*/
  
  /*@RequestMapping("myzzalList")
  public JsonResult myzzalList(int mno) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("myzzalList", collectService.myzzalList(mno));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }*/
}





