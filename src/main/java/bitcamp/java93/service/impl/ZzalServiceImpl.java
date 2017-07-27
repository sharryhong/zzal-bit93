package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.MemberDao;
import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@Service
public class ZzalServiceImpl implements MemberService {
	
	@Autowired
	MemberDao memberDao;
	
	@Override
  public Member getByEmailPassword(String email, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("email", email);
    valueMap.put("password", password);
    
    return memberDao.selectOneByEmailPassword(valueMap);
  }

	@Override
	public Member get(int no) throws Exception {
	    return memberDao.selectOne(no);
	}

	@Override
	public List<Member> list() throws Exception {
		// TODO Auto-generated method stub
		return memberDao.selectList();
	}

  @Override
  public void add(Member member) throws Exception {
    memberDao.insert(member);
  }
  
  @Override
  public void update(Member member) throws Exception {
    int count = memberDao.update(member);
    if (count < 1) {
      throw new Exception(member.getNo() + "번 회원을 찾을 수 없습니다.");
    }
  }
	  	
}
