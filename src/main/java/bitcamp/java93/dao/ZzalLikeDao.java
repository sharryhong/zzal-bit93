package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.ZzalLike;

public interface ZzalLikeDao {
//  Member selectOneByEmailPassword(Map<String,Object> valueMap);
//  Member selectOne(int no);
  List<ZzalLike> selectList(int zzno);
//  int insert(Member member);
//  int update(Member member);
}
