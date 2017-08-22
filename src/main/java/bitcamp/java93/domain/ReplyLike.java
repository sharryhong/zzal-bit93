package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */

public class ReplyLike {
  int replyNumber;
  int memberNumber;
  int reparentNumber;
  
  public int getReplyNumber() {
    return replyNumber;
  }
  public int getMemberNumber() {
    return memberNumber;
  }
  public int getReparentNumber() {
    return reparentNumber;
  }
  public void setReplyNumber(int replyNumber) {
    this.replyNumber = replyNumber;
  }
  public void setMemberNumber(int memberNumber) {
    this.memberNumber = memberNumber;
  }
  public void setReparentNumber(int reparentNumber) {
    this.reparentNumber = reparentNumber;
  }
  
  @Override
  public String toString() {
    return "ReplyLike [replyNumber=" + replyNumber + ", memberNumber=" + memberNumber + ", reparentNumber="
        + reparentNumber + "]";
  }
  
  
}
