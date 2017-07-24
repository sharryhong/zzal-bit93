package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Zzallectpage {
	
	
	int zzallectPageCode;
	int pageNum;
	String dataType;
	String contents;
	
	
	
	
	
	
	
	@Override
	public String toString() {
		return "Zzallectpage [zzallectPageCode=" + zzallectPageCode + ", pageNum=" + pageNum + ", dataType=" + dataType
				+ ", contents=" + contents + "]";
	}
	
	
	
	public int getZzallectPageCode() {
		return zzallectPageCode;
	}
	public void setZzallectPageCode(int zzallectPageCode) {
		this.zzallectPageCode = zzallectPageCode;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	
	
	
  
  
}
