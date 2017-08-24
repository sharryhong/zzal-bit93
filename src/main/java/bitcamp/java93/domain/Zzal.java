package bitcamp.java93.domain;

public class Zzal {
	int zzno;
	int mno;
	int cno;
	int cono;
	String title;
	String mainPic;
	String cdt;
	String categoryName;
	Boolean zzalTemporary;
	int hitCount;
	int likeCount;
	int replyCount;
	int rowCount;
	Member member;
	ZzalLike zzallike;
	Page page;
	ChoiceCategory choiceCategory;
	Collect collect;
	
  @Override
  public String toString() {
    return "Zzal [zzno=" + zzno + ", mno=" + mno + ", cno=" + cno + ", cono=" + cono + ", title=" + title + ", mainPic="
        + mainPic + ", cdt=" + cdt + ", categoryName=" + categoryName + ", zzalTemporary=" + zzalTemporary
        + ", hitCount=" + hitCount + ", likeCount=" + likeCount + ", replyCount=" + replyCount + ", rowCount="
        + rowCount + ", member=" + member + ", zzallike=" + zzallike + ", page=" + page + ", choiceCategory="
        + choiceCategory + ", collect=" + collect + "]";
  }
  
  public Collect getCollect() {
    return collect;
  }

  public void setCollect(Collect collect) {
    this.collect = collect;
  }

  public ChoiceCategory getChoiceCategory() {
    return choiceCategory;
  }

  public void setChoiceCategory(ChoiceCategory choiceCategory) {
    this.choiceCategory = choiceCategory;
  }

  public Page getPage() {
    return page;
  }

  public void setPage(Page page) {
    this.page = page;
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

  public int getHitCount() {
    return hitCount;
  }

  public void setHitCount(int hitCount) {
    this.hitCount = hitCount;
  }

  public int getLikeCount() {
    return likeCount;
  }

  public void setLikeCount(int likeCount) {
    this.likeCount = likeCount;
  }

  public int getReplyCount() {
    return replyCount;
  }

  public void setReplyCount(int replyCount) {
    this.replyCount = replyCount;
  }

  public int getRowCount() {
    return rowCount;
  }

  public void setRowCount(int rowCount) {
    this.rowCount = rowCount;
  }

  public Member getMember() {
    return member;
  }

  public void setMember(Member member) {
    this.member = member;
  }

  public ZzalLike getZzallike() {
    return zzallike;
  }

  public void setZzallike(ZzalLike zzallike) {
    this.zzallike = zzallike;
  }

  public String getCategoryName() {
    return categoryName;
  }

  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }
  
}
