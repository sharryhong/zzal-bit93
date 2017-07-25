package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.DyMember;

public interface DyMemberDao {
  List<DyMember> selectList(Map<String,Object> valueMap);
  int countAll();
  DyMember selectOne(int no);
}
