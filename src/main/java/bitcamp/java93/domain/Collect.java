package bitcamp.java93.domain;

public class Collect {
  int no;
  int memNo;
  int zzno;
  String title;
  String content;
  String picture;
  Boolean isPublic;
  Member membe;
  Zzal zzall;
  ZzalLike zzallikes;
  /*int hitCount;
  int likeCount;
  int replyCount;*/
  @Override
  public String toString() {
    return "Collect [no=" + no + ", memNo=" + memNo + ", zzno=" + zzno + ", title=" + title + ", content=" + content
        + ", picture=" + picture + ", isPublic=" + isPublic + ", membe=" + membe + ", zzall=" + zzall + ", zzallikes="
        + zzallikes + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getMemNo() {
    return memNo;
  }
  public void setMemNo(int memNo) {
    this.memNo = memNo;
  }
  public int getZzno() {
    return zzno;
  }
  public void setZzno(int zzno) {
    this.zzno = zzno;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getPicture() {
    return picture;
  }
  public void setPicture(String picture) {
    this.picture = picture;
  }
  public Boolean getIsPublic() {
    return isPublic;
  }
  public void setIsPublic(Boolean isPublic) {
    this.isPublic = isPublic;
  }
  public Member getMembe() {
    return membe;
  }
  public void setMembe(Member membe) {
    this.membe = membe;
  }
  public Zzal getZzall() {
    return zzall;
  }
  public void setZzall(Zzal zzall) {
    this.zzall = zzall;
  }
  public ZzalLike getZzallikes() {
    return zzallikes;
  }
  public void setZzallikes(ZzalLike zzallikes) {
    this.zzallikes = zzallikes;
  }
  
  
}
