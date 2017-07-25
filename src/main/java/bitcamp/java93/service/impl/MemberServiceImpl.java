package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.MemberDao;
import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	  MemberDao memberDao;

	@Override
	public Member get(int no) throws Exception {
	    return memberDao.selectOne(no);
		
	}

	@Override
	public List<Member> list() throws Exception {
		// TODO Auto-generated method stub
		return memberDao.selectList();
	}
	  	


}
