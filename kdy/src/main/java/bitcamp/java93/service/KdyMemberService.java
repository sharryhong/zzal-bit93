package bitcamp.java93.service;  

import java.util.List;

import bitcamp.java93.domain.KdyMember;

public interface KdyMemberService {
  List<KdyMember> list() throws Exception;
  int getSize() throws Exception;
  KdyMember get(int no) throws Exception;
  void getPhotPath(String newFilename); 
}
