package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Zzal;

public interface ZzalDao {
  List<Zzal> selectList(int zzno);
  List<Zzal> zzalList(Map<String,Object> valueMap);
  int countAll();
}
