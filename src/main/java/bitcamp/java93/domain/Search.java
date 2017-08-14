package bitcamp.java93.domain;

public class Search {
	int szzalno;
	int smembno;
	int scatgno;
	int scolletno;
	String stitle;
	String smainPic;
	String scdt;
	String scategoryName;
	
  @Override
  public String toString() {
    return "Search [szzalno=" + szzalno + ", smembno=" + smembno + ", scatgno=" + scatgno + ", scolletno=" + scolletno
        + ", stitle=" + stitle + ", smainPic=" + smainPic + ", scdt=" + scdt + ", scategoryName=" + scategoryName + "]";
  }

  public int getSzzalno() {
    return szzalno;
  }

  public void setSzzalno(int szzalno) {
    this.szzalno = szzalno;
  }

  public int getSmembno() {
    return smembno;
  }

  public void setSmembno(int smembno) {
    this.smembno = smembno;
  }

  public int getScatgno() {
    return scatgno;
  }

  public void setScatgno(int scatgno) {
    this.scatgno = scatgno;
  }

  public int getScolletno() {
    return scolletno;
  }

  public void setScolletno(int scolletno) {
    this.scolletno = scolletno;
  }

  public String getStitle() {
    return stitle;
  }

  public void setStitle(String stitle) {
    this.stitle = stitle;
  }

  public String getSmainPic() {
    return smainPic;
  }

  public void setSmainPic(String smainPic) {
    this.smainPic = smainPic;
  }

  public String getScdt() {
    return scdt;
  }

  public void setScdt(String scdt) {
    this.scdt = scdt;
  }

  public String getScategoryName() {
    return scategoryName;
  }

  public void setScategoryName(String scategoryName) {
    this.scategoryName = scategoryName;
  }
	
  
}
