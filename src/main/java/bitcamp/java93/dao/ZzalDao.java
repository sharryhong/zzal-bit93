package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Zzal;

public interface ZzalDao {
  List<Zzal> selectList(int zzno);
  List<Zzal> zzalListWithCount(Map<String,Object> valueMap);
  List<Zzal> zzalListCategory(Map<String,Object> valueMap);
  List<Zzal> zzalBestList(Map<String,Object> valueMap);
  List<Zzal> zzalBestCategoryList(int cno);
  List<Zzal> zzalLikeRank(Map<String,Object> valueMap);
  List<Zzal> zzalViewRank(Map<String,Object> valueMap);
  int hitCountUpdate(Zzal zzal);
  int countAll();
  int foundRows();
  int foundRowsCatetory(int cno);
}
