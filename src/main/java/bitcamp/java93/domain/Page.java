package bitcamp.java93.domain;

public class Page {
	int zzalpageNo;
	int zzalNo;
	int pageNo;
	String conTypeZ;
	String pagePic;
	String ConTextZ;
	@Override
	public String toString() {
		return "Page [zzalpageNo=" + zzalpageNo + ", zzalNo=" + zzalNo + ", pageNo=" + pageNo + ", conTypeZ=" + conTypeZ
				+ ", pagePic=" + pagePic + ", ConTextZ=" + ConTextZ + "]";
	}
	public int getZzalpageNo() {
		return zzalpageNo;
	}
	public void setZzalpageNo(int zzalpageNo) {
		this.zzalpageNo = zzalpageNo;
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
	public String getPagePic() {
		return pagePic;
	}
	public void setPagePic(String pagePic) {
		this.pagePic = pagePic;
	}
	public String getConTextZ() {
		return ConTextZ;
	}
	public void setConTextZ(String conTextZ) {
		ConTextZ = conTextZ;
	}
	
	

}	
