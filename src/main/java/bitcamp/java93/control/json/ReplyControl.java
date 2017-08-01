package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Reply;
import bitcamp.java93.service.MemberService;
import bitcamp.java93.service.ReplyService;

@RestController
@RequestMapping("/reply/")
public class ReplyControl {
  
  @Autowired ServletContext servletContext;
  @Autowired ReplyService replyService;
  @Autowired MemberService memberService;

  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", replyService.list());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("countreply")
  public JsonResult countReply() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("countReply", replyService.getSize());
    System.out.println();
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("add")
  public JsonResult update(Reply reply, HttpSession session) throws Exception {
    Member getMember = (Member)session.getAttribute("loginMember");
    int MemberNo = getMember.getNo();
    reply.setMemberNumber(MemberNo);
    replyService.add(reply);
    return new JsonResult(JsonResult.SUCCESS, reply);
  }

/*  @RequestMapping("add")
  public JsonResult update(Reply reply) throws Exception {
    replyService.add(reply);
    System.out.println(reply);
    return new JsonResult(JsonResult.SUCCESS, reply);
  }*/
  
  
  
  @RequestMapping("update")
  public JsonResult update(Member member, HttpSession session) throws Exception { // 여기서의 Member member는 클라이언트에서 post요청으로 받은 값을 담고있다. 
     Member getMember = (Member)session.getAttribute("loginMember"); //getMember객체에 session 속성명이 "loginMember"인 속성의 값을 Object(member) 타입으로 리턴하여 넣는다. 
     memberService.update(member); // memberService의 update메서드에 파라미터로 받은 member객체를 넘겨준다. 
     System.out.println(member.getNick());
     String nick = member.getNick(); // post요청으로 받은 member 객체의 nick 프로퍼티 값을, String nick에 저장한다(주소를 연결한다). 
     String password = member.getPassword(); // post요청으로 받은 member 객체의 password 프로퍼티 값을, String password에 저장한다(주소를 연결한다).
     getMember.setNick(nick); // 처음에 선언한(세션에서 얻은) getMember 객체에 nick과  
     getMember.setPassword(password); // ㄴ 패스워드를 넣은 뒤,
     session.setAttribute("loginMember", getMember); // ㄴ "loginMember" 세션객체에 넣는다. 
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  
  
  @RequestMapping("delete")
  public int delete(@RequestParam int rno, @RequestParam int mno, HttpSession session) throws Exception {
    Member getMember = (Member)session.getAttribute("loginMember");
    int MemberNo = getMember.getNo();
    if (MemberNo == mno) {
    replyService.remove(rno);
    } else {
      System.out.println("삭제 실패");
      return 0;
    }
    return 1;
  }
}









