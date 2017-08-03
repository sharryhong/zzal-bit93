package bitcamp.java93.domain;

public class Page {
	int zaalpapeNo;
	int zzalNo;
	int pageNo;
	String conTypeZ;
	String ConTextZ;
	
	
	
	public int getZaalpapeNo() {
		return zaalpapeNo;
	}
	public void setZaalpapeNo(int zaalpapeNo) {
		this.zaalpapeNo = zaalpapeNo;
	}
	public int getZzalNo() {
		return zzalNo;
	}
	public void setZzalNo(int zzalNo) {
		this.zzalNo = zzalNo;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public String getConTypeZ() {
		return conTypeZ;
	}
	public void setConTypeZ(String conTypeZ) {
		this.conTypeZ = conTypeZ;
	}
	public String getConTextZ() {
		return ConTextZ;
	}
	public void setConTextZ(String conTextZ) {
		ConTextZ = conTextZ;
	}
	
	
	@Override
	public String toString() {
		return "Page [zaalpapeNo=" + zaalpapeNo + ", zzalNo=" + zzalNo + ", pageNo=" + pageNo + ", conTypeZ=" + conTypeZ
				+ ", ConTextZ=" + ConTextZ + "]";
	}
	
	
	

}	
