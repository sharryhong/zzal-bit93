package bitcamp.java93.dao;

import java.util.HashMap;

import bitcamp.java93.domain.ZzalLike;

public interface ZzalLikeDao {
//  Member selectOneByEmailPassword(Map<String,Object> valueMap);
//  Member selectOne(int no);
  int getcnt(int zzno);
  ZzalLike douLike(HashMap<String,Object> valueMap);
  void dloveu(ZzalLike zzalLike);
  void notdloveu(ZzalLike zzalLike);
//  int insert(Member member);
//  int update(Member member);
}
