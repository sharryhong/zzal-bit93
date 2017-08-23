package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Member;

public interface MemberDao {
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  Member selectOne(int no);
  List<Member> selectList();
  int insert(Member member);
  int update(Member member);
  int updateCatgAuth(Member member);
  Member findOverLap(Map<String,Object> valueMap);
  
  Member isRightMyPassword(Member member);
  List<Member> listExceptMyNick(Member member);
  int updateExceptPassword(Member member);
  
  Member refreshOne(Member member);

}
