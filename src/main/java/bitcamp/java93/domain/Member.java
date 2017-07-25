package bitcamp.java93.domain;

public class Member {
	int mno;
  String nick;
  String email;
  String password;
  String membtype;
  String signtype;
  String membpic;
  boolean auth;
	 
  @Override
  public String toString() {
    return "Member [mno=" + mno + ", nick=" + nick + ", email=" + email + ", password=" + password + ", membtype="
        + membtype + ", signtype=" + signtype + ", membpic=" + membpic + ", auth=" + auth + "]";
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
  public String getSigntype() {
    return signtype;
  }
  public void setSigntype(String signtype) {
    this.signtype = signtype;
  }
  public String getMembpic() {
    return membpic;
  }
  public void setMembpic(String membpic) {
    this.membpic = membpic;
  }
  public boolean isAuth() {
    return auth;
  }
  public void setAuth(boolean auth) {
    this.auth = auth;
  }
}
