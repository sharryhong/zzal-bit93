package bitcamp.java93.domain;

import java.util.List;

public class Notice {
  int nono;
  int ownerNo;
  int zzalNono;
  int reNono;
  int conono;
  boolean ynn;
  String Notype;
  int who;
  String who_nick;
  String who_pic;
  String zzal_title;
  String colct_title;
  String reply_con;
  String noticdt;
  List<Notice> noticearr;
public int getNono() {
	return nono;
}
public void setNono(int nono) {
	this.nono = nono;
}
public int getOwnerNo() {
	return ownerNo;
}
public void setOwnerNo(int ownerNo) {
	this.ownerNo = ownerNo;
}
public int getZzalNono() {
	return zzalNono;
}
public void setZzalNono(int zzalNono) {
	this.zzalNono = zzalNono;
}
public int getReNono() {
	return reNono;
}
public void setReNono(int reNono) {
	this.reNono = reNono;
}
public int getConono() {
	return conono;
}
public void setConono(int conono) {
	this.conono = conono;
}
public boolean isYnn() {
	return ynn;
}
public void setYnn(boolean ynn) {
	this.ynn = ynn;
}
public String getNotype() {
	return Notype;
}
public void setNotype(String notype) {
	Notype = notype;
}
public int getWho() {
	return who;
}
public void setWho(int who) {
	this.who = who;
}
public String getWho_nick() {
	return who_nick;
}
public void setWho_nick(String who_nick) {
	this.who_nick = who_nick;
}
public String getWho_pic() {
	return who_pic;
}
public void setWho_pic(String who_pic) {
	this.who_pic = who_pic;
}
public String getZzal_title() {
	return zzal_title;
}
public void setZzal_title(String zzal_title) {
	this.zzal_title = zzal_title;
}
public String getColct_title() {
	return colct_title;
}
public void setColct_title(String colct_title) {
	this.colct_title = colct_title;
}
public String getReply_con() {
	return reply_con;
}
public void setReply_con(String reply_con) {
	this.reply_con = reply_con;
}
public String getNoticdt() {
	return noticdt;
}
public void setNoticdt(String noticdt) {
	this.noticdt = noticdt;
}
public List<Notice> getNoticearr() {
	return noticearr;
}
public void setNoticearr(List<Notice> noticearr) {
	this.noticearr = noticearr;
}
@Override
public String toString() {
	return "Notice [nono=" + nono + ", ownerNo=" + ownerNo + ", zzalNono=" + zzalNono + ", reNono=" + reNono
			+ ", conono=" + conono + ", ynn=" + ynn + ", Notype=" + Notype + ", who=" + who + ", who_nick=" + who_nick
			+ ", who_pic=" + who_pic + ", zzal_title=" + zzal_title + ", colct_title=" + colct_title + ", reply_con="
			+ reply_con + ", noticdt=" + noticdt + ", noticearr=" + noticearr + "]";
}

  
  
}	
