package bitcamp.java93.domain;

public class Zzal {
	int zzno;
	int mno;
	int cno;
	int cono;
	String title;
	String mainPic;
	String cdt;
	Boolean zzalTemporary;
	int likeCount;
	int replyCount;
	Member member;
	ZzalLike zzallike;
	
  @Override
  public String toString() {
    return "Zzal [zzno=" + zzno + ", mno=" + mno + ", cno=" + cno + ", cono=" + cono + ", title=" + title + ", mainPic="
        + mainPic + ", cdt=" + cdt + ", zzalTemporary=" + zzalTemporary + ", member=" + member + ", likeCount="
        + likeCount + "]";
  }
  
  public int getZzno() {
    return zzno;
  }
  public void setZzno(int zzno) {
    this.zzno = zzno;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public int getCno() {
    return cno;
  }
  public void setCno(int cno) {
    this.cno = cno;
  }
  public int getCono() {
    return cono;
  }
  public void setCono(int cono) {
    this.cono = cono;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getMainPic() {
    return mainPic;
  }
  public void setMainPic(String mainPic) {
    this.mainPic = mainPic;
  }
  public String getCdt() {
    return cdt;
  }
  public void setCdt(String cdt) {
    this.cdt = cdt;
  }
  public Boolean getZzalTemporary() {
    return zzalTemporary;
  }
  public void setZzalTemporary(Boolean zzalTemporary) {
    this.zzalTemporary = zzalTemporary;
  }
  public Member getMember() {
    return member;
  }
  public void setMember(Member member) {
    this.member = member;
  }
  public int getLikeCount() {
    return likeCount;
  }
  public void setLikeCount(int likeCount) {
    this.likeCount = likeCount;
  }
	
    
}
