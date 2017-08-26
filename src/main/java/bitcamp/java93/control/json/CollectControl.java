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
import bitcamp.java93.domain.Subscribe;
import bitcamp.java93.service.CollectService;
import bitcamp.java93.service.SubscribeService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/collect/")
public class CollectControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CollectService collectService;
  @Autowired SubscribeService subscribeService;
  
  @RequestMapping("list")
  public JsonResult list(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.list(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("publiclist")
  public JsonResult publiclist(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.publiclist(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("subslist")
  public JsonResult subslist(int mno) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.subslist(mno));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("detail")
  public JsonResult detail(int no) throws Exception {
    System.out.println(no);
    Collect collect = collectService.get(no);
//    HashMap<String,Object> dataMap = new HashMap<>();
//    dataMap.put("list", collect);
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
  public JsonResult delete(Subscribe subscribe) throws Exception {
    System.out.println(subscribe);
    collectService.remove(subscribe);
    
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
    dataMap.put("selectzzalList", collectService.temporaryzzalList(map));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("detialzzalList")
  public JsonResult detialzzalList(int cono) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    map.put("cono", cono);
    map.put("tmp", false);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("selectzzalList", collectService.detialzzalList(map));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("likezzal")
  public JsonResult isLike( int mno) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    
   dataMap.put("selectzzalList",collectService.likezzal(mno));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("selectuser")
  public JsonResult selectUser( int cono) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    System.out.println(collectService.selectUser(cono));
   dataMap.put("selectzzalList",collectService.selectUser(cono));
   dataMap.put("selectcnts",collectService.getcount(cono));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("alllist")
  public JsonResult selectAllList(int no) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", collectService.selectAllList(no));
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
}





