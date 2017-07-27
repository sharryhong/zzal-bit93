package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Zzal;

public interface ZzalService {
  
//  Member getByEmailPassword(String email, String password) throws Exception;
//	Member get(int no) throws Exception;
	List<Zzal> list(int zzno) throws Exception;
//	void add(Member member) throws Exception;
//	void update(Member member) throws Exception;
}
