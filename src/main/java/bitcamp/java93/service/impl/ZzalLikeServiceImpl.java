package bitcamp.java93.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ZzalLikeDao;
import bitcamp.java93.domain.ZzalLike;
import bitcamp.java93.service.ZzalLikeService;

@Service
public class ZzalLikeServiceImpl implements ZzalLikeService {
	
	@Autowired
	ZzalLikeDao zzalLikeDao;
	


	@Override
	public int getcount(int zzno) throws Exception {
		// TODO Auto-generated method stub
		return zzalLikeDao.getcnt(zzno);
	}



	@Override
	public ZzalLike douLike(int mno, int zzno) {
		// TODO Auto-generated method stub
		HashMap<String,Object> valueMap = new HashMap<>();
	    valueMap.put("mno", mno);
	    valueMap.put("zzno", zzno);
	    
		return zzalLikeDao.douLike(valueMap);
	}



	@Override
	public ZzalLike loveu(int mno, int zzno) {
		HashMap<String,Object> valueMap = new HashMap<>();
	    valueMap.put("mno", mno);
	    valueMap.put("zzno", zzno);
	    
		return zzalLikeDao.loveu(valueMap);
	}
	
	
	
	
//	@Override
//	public Member get(int no) throws Exception {
//		return zzalDao.selectOne(no);
//	}
	
//	@Override
//	public Member getByEmailPassword(String email, String password) throws Exception {
//		HashMap<String,Object> valueMap = new HashMap<>();
//		valueMap.put("email", email);
//		valueMap.put("password", password);
//		
//		return memberDao.selectOneByEmailPassword(valueMap);
//	}
//
//  @Override
//  public void add(Member member) throws Exception {
//    memberDao.insert(member);
//  }
//  
//  @Override
//  public void update(Member member) throws Exception {
//    int count = memberDao.update(member);
//    if (count < 1) {
//      throw new Exception(member.getNo() + "번 회원을 찾을 수 없습니다.");
//    }
//  }
	  	
}
