package bitcamp.java93.domain;

public class Collect {
  int no;
  String title;
  String content;
  String picture;
  Boolean isPublic;
  @Override
  public String toString() {
    return "Collect [no=" + no + ", title=" + title + ", content=" + content + ", picture=" + picture + ", isPublic="
        + isPublic + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
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
  
}
