package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class DyMember {
  int mno;
  String nick;
  String email;
  String password;
  String MemberType;
  String SignupType;
  String userPic;
  
  
  @Override
  public String toString() {
    return "dyMember [mno=" + mno + ", nick=" + nick + ", email=" + email + ", password=" + password + ", MemberType="
        + MemberType + ", SignupType=" + SignupType + ", userPic=" + userPic + "]";
  }


  public int getMno() {
    return mno;
  }


  public String getNick() {
    return nick;
  }


  public String getEmail() {
    return email;
  }


  public String getPassword() {
    return password;
  }


  public String getMemberType() {
    return MemberType;
  }


  public String getSignupType() {
    return SignupType;
  }


  public String getUserPic() {
    return userPic;
  }


  public void setMno(int mno) {
    this.mno = mno;
  }


  public void setNick(String nick) {
    this.nick = nick;
  }


  public void setEmail(String email) {
    this.email = email;
  }


  public void setPassword(String password) {
    this.password = password;
  }


  public void setMemberType(String memberType) {
    MemberType = memberType;
  }


  public void setSignupType(String signupType) {
    SignupType = signupType;
  }


  public void setUserPic(String userPic) {
    this.userPic = userPic;
  }

  
  
}
