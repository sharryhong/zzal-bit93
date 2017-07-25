package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Member {
	int mno;
	 String nick;
	 String email;
	 String password;
	 String membtype;
	 String signtype;
	 String membpic;
	 boolean Auto;
	 
	@Override
	public String toString() {
		return "Zzalmemb [mno=" + mno + ", nick=" + nick + ", email=" + email + ", password=" + password + ", membtype="
				+ membtype + ", signtype=" + signtype + ", membpic=" + membpic + "]";
	}

	public int getMno() {
		return mno;
	}
	public void setMno(int mno) {
		this.mno = mno;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMembtype() {
		return membtype;
	}
	public void setMembtype(String membtype) {
		this.membtype = membtype;
	}
	public String getSignype() {
		return signtype;
	}
	public void setSignype(String signtype) {
		this.signtype = signtype;
	}
	public String getMembpic() {
		return membpic;
	}
	public void setMembpic(String membpic) {
		this.membpic = membpic;
	}
	 
  
  
}
