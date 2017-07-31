package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalwriteService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/zzal/")
public class ZzalwriteControl {

	@Autowired ServletContext servletContext;
	@Autowired ZzalwriteService zzalwriteService;
	
	@RequestMapping("add")
  public JsonResult add(Zzal zzal, String filenames) throws Exception {
	  System.out.println(zzal.getCono());
/*	  if (zzal.getCono() == 0) {
	    Integer x = null;
	    zzal.setCono((int)x);
	  }
	  System.out.println(zzal.getCono());*/
    zzal.setMainPic(filenames);
    zzalwriteService.add(zzal);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
	
	/*@RequestMapping("upload")
  public JsonResult upload(MultipartFile[] files) throws Exception {
    ArrayList<String> fileList = new ArrayList<>();
    for (MultipartFile file : files) {
      if (file.isEmpty())
        continue;
      String filename = getNewFilename();
      file.transferTo(new File(servletContext.getRealPath("/upload/" + filename)));
      fileList.add(filename);
    }
    return new JsonResult(JsonResult.SUCCESS, fileList);
  }*/
	
	@RequestMapping(path="upload")
  public JsonResult upload(MultipartFile[] files) throws Exception {
	  ArrayList<String> fileList = new ArrayList<>();
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename();
      File file = new File(servletContext.getRealPath("/upload/" + newFilename));
      files[i].transferTo(file);
      
      File thumbnail = new File(servletContext.getRealPath("/upload/" + newFilename + "_500"));
      Thumbnails.of(file).size(500, 500).toFile(thumbnail); 

      thumbnail = new File(servletContext.getRealPath("/upload/" + newFilename + "_800"));
      Thumbnails.of(file).size(800, 800).toFile(thumbnail);
      
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

}









