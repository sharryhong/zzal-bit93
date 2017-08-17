package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;

public interface MemberService {
  
  Member getByEmailPassword(String email, String password, String signtype) throws Exception;
	Member get(int no) throws Exception;
	List<Member> list() throws Exception;
	void add(Member member) throws Exception;
	void update(Member member) throws Exception;
	void updateCatgAuth(Member member) throws Exception;
  Member findOverLap(String email, String signtype) throws Exception;
}
