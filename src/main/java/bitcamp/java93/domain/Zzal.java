package bitcamp.java93.domain;

import java.util.List;

public class Zzal {
	int zzno;
	int mno;
	int cno;
	int cono;
	String nick;
	String title;
	String mainPic;
	String cdt;
	Boolean zzalTemporary;
	
  @Override
  public String toString() {
    return "Zzal [zzno=" + zzno + ", mno=" + mno + ", cno=" + cno + ", cono=" + cono + ", nick=" + nick + ", title="
        + title + ", mainPic=" + mainPic + ", cdt=" + cdt + ", zzalTemporary=" + zzalTemporary + "]";
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

  public String getNick() {
    return nick;
  }

  public void setNick(String nick) {
    this.nick = nick;
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
	
}
