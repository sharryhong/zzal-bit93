package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Zzal;

public interface ZzalService {
	List<Zzal> list(int zzno) throws Exception;
	/*List<Zzal> zzalList(int pageNo, int pageSize) throws Exception;*/
	List<Zzal> zzalListWithCount(int pageNo, int pageSize) throws Exception;
	int getSize() throws Exception;
}
