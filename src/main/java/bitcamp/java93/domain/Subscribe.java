package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Subscribe {
  int memberno;
  int collectNo;
  int zzalNo;
@Override
public String toString() {
	return "Subscribe [memberno=" + memberno + ", collectNo=" + collectNo + ", zzalNo=" + zzalNo + "]";
}
public int getMemberno() {
	return memberno;
}
public void setMemberno(int memberno) {
	this.memberno = memberno;
}
public int getCollectNo() {
	return collectNo;
}
public void setCollectNo(int collectNo) {
	this.collectNo = collectNo;
}
public int getZzalNo() {
	return zzalNo;
}
public void setZzalNo(int zzalNo) {
	this.zzalNo = zzalNo;
}

  
  
  
  
  
}
