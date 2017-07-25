package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.DyMember;

public interface DyMemberService {
  List<DyMember> list(int pageNo, int pageSize) throws Exception;
  int getSize() throws Exception;
  DyMember get(int no) throws Exception;

}
