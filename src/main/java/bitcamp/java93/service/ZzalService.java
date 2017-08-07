package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Zzal;

public interface ZzalService {
	List<Zzal> list(int zzno) throws Exception;
	/*List<Zzal> zzalList(int pageNo, int pageSize) throws Exception;*/
	List<Zzal> zzalListWithCount(int pageNo, int pageSize) throws Exception;
	List<Zzal> zzalListCategory(int pageNo, int pageSize, int cno) throws Exception;
	List<Zzal> zzalBestList() throws Exception;
	List<Zzal> zzalLikeRank() throws Exception;
	List<Zzal> zzalViewRank() throws Exception;
	void hitCountUpdate(Zzal zzal) throws Exception;
	int getSize() throws Exception;
	int foundRows() throws Exception;
	int foundRowsCatetory(int cno) throws Exception;
}
