package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalwriteService;

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
	
	@RequestMapping("upload")
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
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }

}









