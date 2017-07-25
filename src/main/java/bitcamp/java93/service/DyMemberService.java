package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.DyMember;

public interface DyMemberService {
  List<DyMember> list() throws Exception;
  int getSize() throws Exception;
  DyMember get(int no) throws Exception;
  String getPhotPath(String path);
}
