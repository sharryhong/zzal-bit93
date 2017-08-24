package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Zzal;

public interface ZzalService {
	List<Zzal> list(int zzno) throws Exception;
	List<Zzal> selectListPages(int zzno) throws Exception;
	List<Zzal> zzalListWithCount(int pageNo, int pageSize) throws Exception;
	List<Zzal> zzalListMyCategory(int pageNo, int pageSize, String[] categoryNumberArray) throws Exception;
	List<Zzal> zzalListCategory(int pageNo, int pageSize, int cno) throws Exception;
	List<Zzal> zzalBestList() throws Exception;
	List<Zzal> zzalBestCategoryList(int cno) throws Exception;
	List<Zzal> zzalListOthers(int mno) throws Exception;
	List<Zzal> zzalLikeRank() throws Exception;
	List<Zzal> zzalViewRank() throws Exception;
	List<Zzal> zzalListNew(int pageNo, int pageSize) throws Exception;
	void hitCountUpdate(Zzal zzal) throws Exception;
	int getSize() throws Exception;
	int foundRows() throws Exception;
	int foundRowsMyIndex(String[] categoryNumberArray) throws Exception;
	int foundRowsCatetory(int cno) throws Exception;
	void remove(int no) throws Exception;
}
