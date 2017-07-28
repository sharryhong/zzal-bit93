package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.ZzalLike;

public interface ZzalLikeService {
  
//  Member getByEmailPassword(String email, String password) throws Exception;
//	Member get(int no) throws Exception;
	List<ZzalLike> list(int zzno) throws Exception;
//	void add(Member member) throws Exception;
//	void update(Member member) throws Exception;
}
