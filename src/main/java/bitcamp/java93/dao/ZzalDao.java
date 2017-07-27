package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Zzal;

public interface ZzalDao {
//  Member selectOneByEmailPassword(Map<String,Object> valueMap);
//  Member selectOne(int no);
  List<Zzal> selectList(int zzno);
//  int insert(Member member);
//  int update(Member member);
}
