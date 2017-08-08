package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;
import bitcamp.java93.service.ZzalwriteService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/write/")
public class ZzalwriteControl {

	@Autowired ServletContext servletContext;
	@Autowired ZzalwriteService zzalwriteService;
	
	@RequestMapping(value="add", method=RequestMethod.POST)
  public JsonResult add(@RequestParam HashMap<String, Object> map,
		  							Zzal zzal,
		  							Page page) throws Exception {

		
		System.out.println(map);
		System.out.println("--------------------");
		String json = (String) map.get("zzal").toString();
		
		HashMap<String, Object> attributes = new HashMap<>();
		
		JsonParser jsonParser = new JsonParser();
		
		JsonObject jsonObject = (JsonObject) jsonParser.parse(json);
		
		Set<Entry<String, JsonElement>> entrySet = jsonObject.entrySet();
        
		for(Map.Entry<String,JsonElement> entry : entrySet){
          attributes.put(entry.getKey(), jsonObject.get(entry.getKey()));
        }
       

        System.out.println("--------------------------");
        System.out.println(attributes);
        
        System.out.println("--------------------------");
        
//        for ( String key : attributes.keySet() ) {
//            System.out.println("방법1) key : " + key +" / value : " + attributes.get(key));
//        }
//        	
        zzal.setCno((int)Integer.parseInt(attributes.get("cno").toString()));
        zzal.setCono((int)Integer.parseInt(attributes.get("cono").toString()));
        zzal.setMno((int)Integer.parseInt(attributes.get("mno").toString()));
        zzal.setMainPic(attributes.get("mainPic").toString());
        zzal.setTitle(attributes.get("title").toString());
        zzal.setZzalTemporary((Boolean)Boolean.parseBoolean(attributes.get("publicType").toString()));
        System.out.println(zzal);
      
      
      
      
      HashMap<String, Object> lectMap = new HashMap<String, Object>();  
      
      lectMap.put("lectMap", zzalwriteService.add(zzal));
        
        String json2 = (String) map.get("zzalpage").toString();
       
         JsonArray arr = (JsonArray)jsonParser.parse(json2);
         System.out.println("====================");
        
       
         
        for(int i =0; i< arr.size(); i++){
        	JsonObject tmp = (JsonObject)arr.get(i);
        	
//        	page.setZzalNo((int)Integer.parseInt(tmp.get("zzno").toString()));
        	page.setPageNo((int)Integer.parseInt(tmp.get("pageNo").toString()));
        	page.setPagePic(tmp.get("pagePic").toString());
        	page.setConTextZ(tmp.get("conText").toString());
        	
        	zzalwriteService.pageAdd(page);
        }

    
    return new JsonResult(JsonResult.SUCCESS, lectMap);
  }
	
 @RequestMapping("tmplist")
  public JsonResult getzzallectlist(int no, int zzno) throws Exception {
	 HashMap<String, Object> findMap = new HashMap<>();
	 findMap.put("zzno", zzno);
	 findMap.put("mno", no);
	 HashMap<String, Object> tmplist = new HashMap<>();
	 
	 tmplist.put("tmplist",zzalwriteService.findTmplist(findMap));
	 
	 
	 return new JsonResult(JsonResult.SUCCESS, tmplist);
  }
 
 
 @RequestMapping("delete")
 public JsonResult delete(int no, int zzno) throws Exception {
	 System.out.println(no);
	 System.out.println(zzno);

	 HashMap<String, Object> findMap = new HashMap<>();
	 findMap.put("zzno", zzno);
	 findMap.put("mno", no);
	 zzalwriteService.deteleInition(findMap);
	 HashMap<String, Object> tmplist = new HashMap<>();
//	 
//	 tmplist.put("tmplist",zzalwriteService.findTmplist(findMap));
	 
	 return new JsonResult(JsonResult.SUCCESS,"ok");
 }
 
 
 
//	
	@RequestMapping(path="upload")
  public JsonResult upload(MultipartFile[] files) throws Exception {
	  
	
		ArrayList<String> fileList = new ArrayList<>();
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename()+"_"+files[i].getOriginalFilename();
      File file = new File(servletContext.getRealPath("/upload/" + newFilename));
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

}









