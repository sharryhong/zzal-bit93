package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Zzalreply {
  int replyCode;
  String replycont;
  String wirteDate;
  boolean reLike;
  boolean report;
  
  
  
  
  
@Override
public String toString() {
	return "Zzalreply [replyCode=" + replyCode + ", replycont=" + replycont + ", wirteDate=" + wirteDate + ", reLike="
			+ reLike + ", report=" + report + "]";
}

public int getReplyCode() {
	return replyCode;
}

public void setReplyCode(int replyCode) {
	this.replyCode = replyCode;
}

public String getReplycont() {
	return replycont;
}

public void setReplycont(String replycont) {
	this.replycont = replycont;
}
public String getWirteDate() {
	return wirteDate;
}
public void setWirteDate(String wirteDate) {
	this.wirteDate = wirteDate;
}
public boolean isReLike() {
	return reLike;
}
public void setReLike(boolean reLike) {
	this.reLike = reLike;
}
public boolean isReport() {
	return report;
}
public void setReport(boolean report) {
	this.report = report;
}
  
 
 
  
 
 
  
}
