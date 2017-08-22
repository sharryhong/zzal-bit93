package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Zzal;

public interface ZzalDao {
  List<Zzal> selectList(int zzno);
  List<Zzal> selectListPages(int zzno);
  List<Zzal> zzalListWithCount(Map<String,Object> valueMap);
  List<Zzal> zzalListMyCategory(Map<String,Object> valueMap);
  List<Zzal> zzalListCategory(Map<String,Object> valueMap);
  List<Zzal> zzalBestList(Map<String,Object> valueMap);
  List<Zzal> zzalBestCategoryList(int cno);
  List<Zzal> zzalListOthers(int mno);
  List<Zzal> zzalLikeRank(Map<String,Object> valueMap);
  List<Zzal> zzalViewRank(Map<String,Object> valueMap);
  List<Zzal> zzalListNew(Map<String,Object> valueMap);
  int hitCountUpdate(Zzal zzal);
  int countAll();
  int foundRows();
  int foundRowsCatetory(int cno);
  int delete(int no);
  void deletePages(int no);
  void deleteLike(int no);
  void deleteNotice(int no);
  void deleteReply(int no);
}
