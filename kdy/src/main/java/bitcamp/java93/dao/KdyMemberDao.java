package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.KdyMember;

public interface KdyMemberDao {
  List<KdyMember> selectList();
  int countAll();
  KdyMember selectOne(int no);
  void getPhotPath(String newFilename);
  
  
  
  
}
