package bitcamp.java93.domain;

import java.util.List;

public class Zzal {
	int zzno;
	int mno;
	int cno;
	
	String nick;
	String title;
	List<String> mainPic;
	String cdt;
	
	
	
	
	
	
	
	
	
	
	@Override
	public String toString() {
		return "Zzal [zzno=" + zzno + ", mno=" + mno + ", cno=" + cno + ", nick=" + nick + ", title=" + title
				+ ", mainPic=" + mainPic + ", cdt=" + cdt + "]";
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
	public List<String> getMainPic() {
		return mainPic;
	}
	public void setMainPic(List<String> mainPic) {
		this.mainPic = mainPic;
	}
	public String getCdt() {
		return cdt;
	}
	public void setCdt(String cdt) {
		this.cdt = cdt;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	

	
	
}
