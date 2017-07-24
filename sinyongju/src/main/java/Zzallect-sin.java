package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Zzallect {
	
	
	int zzallectCode;
	String title;
	String mainpic;
	String writeDate;
	
	
	
	
	
	
	
	
	@Override
	public String toString() {
		return "Zzallect [zzallectCode=" + zzallectCode + ", title=" + title + ", mainpic=" + mainpic + ", writeDate="
				+ writeDate + "]";
	}
	
	
	
	public int getZzallectCode() {
		return zzallectCode;
	}
	public void setZzallectCode(int zzallectCode) {
		this.zzallectCode = zzallectCode;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMainpic() {
		return mainpic;
	}
	public void setMainpic(String mainpic) {
		this.mainpic = mainpic;
	}
	public String getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}
	
	
	
	
	
  
  
}
