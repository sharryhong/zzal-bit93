package bitcamp.java93.service;

import bitcamp.java93.domain.ZzalLike;

public interface ZzalLikeService {
  
//  Member getByEmailPassword(String email, String password) throws Exception;
//	Member get(int no) throws Exception;
	int getcount(int zzno) throws Exception;
	ZzalLike douLike(int mno, int zzno);
	ZzalLike loveu(int mno, int zzno);
//	void add(Member member) throws Exception;
//	void update(Member member) throws Exception;
}
