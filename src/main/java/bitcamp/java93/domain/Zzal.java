package bitcamp.java93.domain;

public class Zzal {
	int zzno;
	String Title;
	String mainPic;
	String cdt;
	
	
	
	
	
	
	
	@Override
	public String toString() {
		return "Zzal [zzno=" + zzno + ", Title=" + Title + ", mainPic=" + mainPic + ", cdt=" + cdt + "]";
	}
	
	
	public int getZzno() {
		return zzno;
	}
	public void setZzno(int zzno) {
		this.zzno = zzno;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
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
	
	
	
	
}
