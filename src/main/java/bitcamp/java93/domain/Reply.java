package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Reply {
  int replyNumber;
  String content;
  String createDate;
  int replyLike;
  Boolean report;
  int zzalnumber;
  int memberNumber;
  String nickName;
  String membPic;
  int reparentCountNumber;
  
  String rereplyParentNumber;
  String replyOrderNumber;
  public int getReplyNumber() {
    return replyNumber;
  }
  public String getContent() {
    return content;
  }
  public String getCreateDate() {
    return createDate;
  }
  public int getReplyLike() {
    return replyLike;
  }
  public Boolean getReport() {
    return report;
  }
  public int getZzalnumber() {
    return zzalnumber;
  }
  public int getMemberNumber() {
    return memberNumber;
  }
  public String getNickName() {
    return nickName;
  }
  public String getMembPic() {
    return membPic;
  }
  public int getReparentCountNumber() {
    return reparentCountNumber;
  }
  public String getRereplyParentNumber() {
    return rereplyParentNumber;
  }
  public String getReplyOrderNumber() {
    return replyOrderNumber;
  }
  public void setReplyNumber(int replyNumber) {
    this.replyNumber = replyNumber;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }
  public void setReplyLike(int replyLike) {
    this.replyLike = replyLike;
  }
  public void setReport(Boolean report) {
    this.report = report;
  }
  public void setZzalnumber(int zzalnumber) {
    this.zzalnumber = zzalnumber;
  }
  public void setMemberNumber(int memberNumber) {
    this.memberNumber = memberNumber;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public void setMembPic(String membPic) {
    this.membPic = membPic;
  }
  public void setReparentCountNumber(int reparentCountNumber) {
    this.reparentCountNumber = reparentCountNumber;
  }
  public void setRereplyParentNumber(String rereplyParentNumber) {
    this.rereplyParentNumber = rereplyParentNumber;
  }
  public void setReplyOrderNumber(String replyOrderNumber) {
    this.replyOrderNumber = replyOrderNumber;
  }
  @Override
  public String toString() {
    return "Reply [replyNumber=" + replyNumber + ", content=" + content + ", createDate=" + createDate + ", replyLike="
        + replyLike + ", report=" + report + ", zzalnumber=" + zzalnumber + ", memberNumber=" + memberNumber
        + ", nickName=" + nickName + ", membPic=" + membPic + ", reparentCountNumber=" + reparentCountNumber
        + ", rereplyParentNumber=" + rereplyParentNumber + ", replyOrderNumber=" + replyOrderNumber + "]";
  }
  
//  int isMyLike = 0; // 1이면 like, 0이면 unlike

  
}
