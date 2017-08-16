package bitcamp.java93.domain;

public class Search {
	int szzalno;
	String stitle;
	String snick;
	String scont;
	String scategoryName;
	@Override
	public String toString() {
		return "Search [szzalno=" + szzalno + ", stitle=" + stitle + ", snick=" + snick + ", scont=" + scont
				+ ", scategoryName=" + scategoryName + "]";
	}
	public int getSzzalno() {
		return szzalno;
	}
	public void setSzzalno(int szzalno) {
		this.szzalno = szzalno;
	}
	public String getStitle() {
		return stitle;
	}
	public void setStitle(String stitle) {
		this.stitle = stitle;
	}
	public String getSnick() {
		return snick;
	}
	public void setSnick(String snick) {
		this.snick = snick;
	}
	public String getScont() {
		return scont;
	}
	public void setScont(String scont) {
		this.scont = scont;
	}
	public String getScategoryName() {
		return scategoryName;
	}
	public void setScategoryName(String scategoryName) {
		this.scategoryName = scategoryName;
	}
	
	
    
}
