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
	int pagezzno = 0;
	
	@Autowired ServletContext servletContext;
	@Autowired ZzalwriteService zzalwriteService;
	
	
	
	
	
	@RequestMapping(value="add", method=RequestMethod.POST)
	public JsonResult add(@RequestParam HashMap<String, Object> map,		  							
		  							Zzal zzal,
		  							Page page) throws Exception {

		
		String json = (String) map.get("zzal").toString();
		Boolean boo = (Boolean)json.equals("null");
		
		
		
		System.out.println("ADD----------------------json");
		
		System.out.println(json.equals("null"));
//		
//		if(json.equals("null")){
//			pagezzno = zzno;
//		}
		
		
		
		JsonParser jsonParser = new JsonParser();
		
		HashMap<String, Object> lectMap = new HashMap<String, Object>(); 
		
		if(!boo){
		
			HashMap<String, Object> attributes = new HashMap<>();
			
			JsonObject jsonObject = (JsonObject) jsonParser.parse(json);
			
			Set<Entry<String, JsonElement>> entrySet = jsonObject.entrySet();
	        
			for(Map.Entry<String,JsonElement> entry : entrySet){
	          attributes.put(entry.getKey(), jsonObject.get(entry.getKey()));
	        }
	        
	        String newsMainPic = attributes.get("mainPic").toString();
	        String newTitle = attributes.get("title").toString();
	        int hitCount = 0;
	        zzal.setCno((int)Integer.parseInt(attributes.get("cno").toString()));
	        zzal.setCono((int)Integer.parseInt(attributes.get("cono").toString()));
	        zzal.setMno((int)Integer.parseInt(attributes.get("mno").toString()));
	        zzal.setMainPic(newsMainPic.replaceAll("^\"+|\"+$", ""));
	        zzal.setTitle(newTitle.replaceAll("^\"+|\"+$", ""));
	        zzal.setZzalTemporary((Boolean)Boolean.parseBoolean(attributes.get("publicType").toString()));
	        zzal.setHitCount(hitCount);
	      
	       
	      
	      lectMap.put("lectMap", zzalwriteService.add(zzal)); 
		}		
      
      // 여기부터 페이지 저장
      String json2 = (String) map.get("zzalpage").toString();
       System.out.println(json2);
         JsonArray arr = (JsonArray)jsonParser.parse(json2);
         
        for(int i =0; i< arr.size(); i++){
        	JsonObject tmp = (JsonObject)arr.get(i);
        	
        	
        	String newsPagePic = tmp.get("pagePic").toString();
        	String newConText = tmp.get("conText").toString();
        		
        	try {
				page.setZzalNo(pagegetno());
			} catch (Exception e) {
				// TODO: handle exception
			}
        	
        	page.setPageNo((int)Integer.parseInt(tmp.get("pageNo").toString()));
        	page.setPagePic(newsPagePic.replaceAll("^\"+|\"+$", ""));
        	page.setConTypeZ(tmp.get("type").toString());
        	page.setConTextZ(newConText.replaceAll("^\"+|\"+$", ""));
        	
        	zzalwriteService.pageAdd(page,boo);
        }

//		return new JsonResult(JsonResult.SUCCESS, "ok");
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
 public JsonResult delete(int no, int zzno, @RequestParam HashMap<String, Object> map, Zzal zzal) throws Exception {
	 
	 pagesetno(zzno);
	 
	 System.out.println("deelelejson");
	 System.out.println(map);
	 System.out.println("json");
	 String json = (String) map.get("zzal").toString();
	 System.out.println(json);
		
		HashMap<String, Object> attributes = new HashMap<>();
		
		JsonParser jsonParser = new JsonParser();
		
		JsonObject jsonObject = (JsonObject) jsonParser.parse(json);
		
		Set<Entry<String, JsonElement>> entrySet = jsonObject.entrySet();
     
		for(Map.Entry<String,JsonElement> entry : entrySet){
       attributes.put(entry.getKey(), jsonObject.get(entry.getKey()));
       }
     
     String newsMainPic = attributes.get("mainPic").toString();
     String newTitle = attributes.get("title").toString();
     int hitCount = 0;
     zzal.setCno((int)Integer.parseInt(attributes.get("cno").toString()));
     zzal.setCono((int)Integer.parseInt(attributes.get("cono").toString()));
     zzal.setMno((int)Integer.parseInt(attributes.get("mno").toString()));
     zzal.setMainPic(newsMainPic.replaceAll("^\"+|\"+$", ""));
     zzal.setTitle(newTitle.replaceAll("^\"+|\"+$", ""));
     zzal.setZzalTemporary((Boolean)Boolean.parseBoolean(attributes.get("publicType").toString()));
     zzal.setHitCount(hitCount);
	 
	 System.out.println("zzal----------------------------");
     System.out.println(zzal);
	 HashMap<String, Object> findMap = new HashMap<>();
	 findMap.put("zzno", zzno);
	 findMap.put("mno", no);
	 findMap.put("zzal",zzal);
	 
	 
	 System.out.println("find map----------------------------");
     System.out.println(findMap);
	 
	 zzalwriteService.deteleInition(findMap);
//	 HashMap<String, Object> tmplist = new HashMap<>();
	 
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


  @SuppressWarnings("unused")
  private void pagesetno(int no){
		this.pagezzno=no;
  }
  
  @SuppressWarnings("unused")
  private int pagegetno(){
		return this.pagezzno;
  }

}









