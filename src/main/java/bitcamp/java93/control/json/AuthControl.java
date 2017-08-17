package bitcamp.java93.control.json;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@RestController
@RequestMapping("/auth/")
@SessionAttributes({"loginMember"})
public class AuthControl {
  @Autowired
  MemberService memberService;

  @RequestMapping(path="login", method=RequestMethod.POST)
  public JsonResult login(String userType, String email, String password, String saveEmail, String signtype, 
      Model model, HttpServletResponse response) throws Exception {

    Member member = null;
//    if (userType.equals("zzaler")) {
    member = memberService.getByEmailPassword(email, password, signtype);
//    }
    
    System.out.println("로그인했다!");
    System.out.println(email);  
    
    if (member != null) { 
      model.addAttribute("loginMember", member);
      
      if (saveEmail != null) {
        Cookie cookie2 = new Cookie("email", email);
        cookie2.setMaxAge(60 * 60 * 24 * 7); 
        response.addCookie(cookie2);
      } else {
        Cookie cookie2 = new Cookie("email", "");
        cookie2.setMaxAge(0);
        response.addCookie(cookie2);
      }
      
      return new JsonResult(JsonResult.SUCCESS, "ok");
      
    } else {
      return new JsonResult(JsonResult.FAIL, "fail");
    }
  }
  
  @RequestMapping("logout")
  public JsonResult logout(HttpSession session, SessionStatus status) throws Exception {
    status.setComplete();
    session.invalidate();  
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("userinfo")
  public JsonResult userinfo(HttpSession session) throws Exception {
    Member loginMember = (Member)session.getAttribute("loginMember");
    return new JsonResult(JsonResult.SUCCESS, loginMember);
  }
  @RequestMapping(path="loginoverlap", method=RequestMethod.POST)
  public JsonResult logins(String email, String signtype) throws Exception {
    Member member = memberService.findOverLap(email, signtype);
    System.out.println(member);
    if (member != null) {
      return new JsonResult(JsonResult.SUCCESS, member);
    } else {
      return new JsonResult(JsonResult.FAIL, "fail");
}
  }

}






