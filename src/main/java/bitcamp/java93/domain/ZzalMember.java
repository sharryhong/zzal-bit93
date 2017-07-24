package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */

import java.util.List;

public class ZzalMember {
  int no;
  String nickName;
  String email;
  String password;
  String memberType;
  String signType;
  List<String> picture;
  
  @Override
  public String toString() {
    return "ZzalMember [no=" + no + ", nickName=" + nickName + ", email=" + email + ", password=" + password
        + ", memberType=" + memberType + ", signType=" + signType + ", picture=" + picture + "]";
  }

  public int getNo() {
    return no;
  }

  public String getNickName() {
    return nickName;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String getMemberType() {
    return memberType;
  }

  public String getSignType() {
    return signType;
  }

  public List<String> getPicture() {
    return picture;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public void setNickName(String nickName) {
    this.nickName = nickName;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setMemberType(String memberType) {
    this.memberType = memberType;
  }

  public void setSignType(String signType) {
    this.signType = signType;
  }

  public void setPicture(List<String> picture) {
    this.picture = picture;
  }
  
}
