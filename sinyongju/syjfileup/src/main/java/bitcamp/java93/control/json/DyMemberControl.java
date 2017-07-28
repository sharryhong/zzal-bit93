package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.DyMember;
import bitcamp.java93.service.DyMemberService;
import net.coobird.thumbnailator.Thumbnails;


@RestController
@RequestMapping("/dymember/")
public class DyMemberControl {
  
  @Autowired ServletContext servletContext;
  @Autowired DyMemberService dyMemberService;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", dyMemberService.list());
    dataMap.put("totalCount", dyMemberService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("detail")
  public JsonResult detail(@RequestParam int no) throws Exception {
    DyMember dyMember = dyMemberService.get(no);
    if (dyMember == null) {
      throw new Exception(no + "번 회원이 없습니다.");
    }
    
        return new JsonResult(JsonResult.SUCCESS, dyMember);
        
  }
  
  @RequestMapping(path="upload1")
  public Object upload1(MultipartFile[] files) throws Exception {
    HashMap<String,Object> resultMap = new HashMap<>();
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      
      files[i].transferTo(new File(servletContext.getRealPath("/upload/" + files[i].getOriginalFilename())));
      System.out.println(servletContext.getRealPath("/upload/"));
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", files[i].getOriginalFilename());
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    resultMap.put("fileList", fileList);
    return new JsonResult(JsonResult.SUCCESS, resultMap);
  }
  
  
  /*thumbnail process*/
  @RequestMapping(path="upload")
  public Object upload(MultipartFile[] files, @RequestParam int no) throws Exception {
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      

      
      String newFilename = this.getNewFilename();
      
//      System.out.println(newFilename);
      dyMemberService.PhotPath(newFilename, no);
      
      
      File file = new File(servletContext.getRealPath("/upload/" + newFilename));
      files[i].transferTo(file);
      
      File thumbnail = new File(servletContext.getRealPath("/upload/thumbnail/" + newFilename + "_80"));
      Thumbnails.of(file).size(80, 80).outputFormat("jpg").toFile(thumbnail); 

      thumbnail = new File(servletContext.getRealPath("/upload/thumbnail/" + newFilename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("jpg").toFile(thumbnail);
      
      thumbnail = new File(servletContext.getRealPath("/upload/thumbnail/" + newFilename + "_200"));
      Thumbnails.of(file).size(200, 200).outputFormat("jpg").toFile(thumbnail);
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    
    
    
    
    
    
    
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return new JsonResult(JsonResult.SUCCESS, resultMap);
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
}









