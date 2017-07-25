package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;

public interface MemberService {
  
	Member get(int no) throws Exception;
	 List<Member> list() throws Exception;
	 Member getByEmailPassword(String email, String password) throws Exception;
}
