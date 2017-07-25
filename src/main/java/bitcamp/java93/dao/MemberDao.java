package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Member;

public interface MemberDao {
  List<Member> selectList();
  Member selectOne(int no);
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
}
