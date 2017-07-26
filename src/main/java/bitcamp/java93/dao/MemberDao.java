package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Member;

public interface MemberDao {
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  Member selectOne(int no);
/*  List<Member> selectList();*/
  /*int insert(Member member);*/
}
