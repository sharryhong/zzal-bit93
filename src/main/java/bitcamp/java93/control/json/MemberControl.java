package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/member/")
public class MemberControl {

	@Autowired ServletContext servletContext;
	@Autowired MemberService memberService;
	
	
  @RequestMapping("isRightMyPassword")
  public JsonResult isRightMyPassword(Member member) throws Exception {
    System.out.println(member);
    member = memberService.isRightMyPassword(member);
    if (member == null) {
      return new JsonResult(JsonResult.FAIL, member);
    } else {
    return new JsonResult(JsonResult.SUCCESS, member);
    }
  }
	
  @RequestMapping("listExceptMyNick")
  public JsonResult listExceptMyNick(Member member) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", memberService.listExceptMyNick(member));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
	@RequestMapping("list")
	  public JsonResult list() throws Exception {
	    
	    HashMap<String,Object> dataMap = new HashMap<>();
	    dataMap.put("list", memberService.list());
	    
	    return new JsonResult(JsonResult.SUCCESS, dataMap);
	  }

	
	@RequestMapping("detail")
	public JsonResult detail(@RequestParam int no) throws Exception {
	  System.out.println(no);
		Member member = memberService.get(no);
		if (member == null) {
			return new JsonResult(JsonResult.FAIL, no + "번 회원이 없습니다.");
		}
		return new JsonResult(JsonResult.SUCCESS, member);
	}
	
	@RequestMapping("add")
  public JsonResult add(Member member) throws Exception {
	  System.out.println(member);
    memberService.add(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  } 
	
//	@RequestMapping("update")
//  public JsonResult update(Member member, HttpSession session) throws Exception {
//	  Member getMember = (Member)session.getAttribute("loginMember");
//	  memberService.update(member);
//	  System.out.println(member.getNick());
//	  String nick = member.getNick();
//	  String password = member.getPassword();
//	  String membpic = member.getMembpic();
//	  getMember.setNick(nick);
//	  getMember.setPassword(password);
//	  getMember.setMembpic(membpic);
//	  session.setAttribute("loginMember", getMember);
//    return new JsonResult(JsonResult.SUCCESS, "ok");
//  }
	
	 @RequestMapping("update")
	  public JsonResult update(Member member, HttpSession session) throws Exception {
	    Member getMember = (Member)session.getAttribute("loginMember");
	    memberService.update(member);
//     System.out.printf("이전멤버", member);
	    
	    member = memberService.refreshOne(member);
//      System.out.printf("새로운 멤버", member);

	    String nick = member.getNick();
	    String password = member.getPassword();
	    String membpic = member.getMembpic();
	    
	    getMember.setNick(nick);
	    getMember.setPassword(password);
	    getMember.setMembpic(membpic);
	    session.setAttribute("loginMember", getMember);
	    return new JsonResult(JsonResult.SUCCESS, "ok");
	  }
	
	 @RequestMapping("updateExceptPassword")
	  public JsonResult updateExceptPassword(Member member, HttpSession session) throws Exception {
	    Member getMember = (Member)session.getAttribute("loginMember");
	    memberService.updateExceptPassword(member);
	    System.out.println(member.getNick());
	    String nick = member.getNick();
	    String password = member.getPassword();
	    String membpic = member.getMembpic();
	    getMember.setNick(nick);
	    getMember.setPassword(password);
	    getMember.setMembpic(membpic);
	    session.setAttribute("loginMember", getMember);
	    return new JsonResult(JsonResult.SUCCESS, "ok");
	  }
	
	
	 @RequestMapping("updatecatgauth")
	  public JsonResult updateCatgAuth(Member member) throws Exception {
	   System.out.println(member);
	    memberService.updateCatgAuth(member);
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
      File thumbnail = new File(servletContext.getRealPath("/upload/"  +"200_"+ newFilename));
      Thumbnails.of(file).size(200, 200).toFile(thumbnail); 
      /*thumbnail = new File(servletContext.getRealPath("/upload/" + "800_"+ newFilename));
      Thumbnails.of(file).size(800, 800).toFile(thumbnail);*/
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









