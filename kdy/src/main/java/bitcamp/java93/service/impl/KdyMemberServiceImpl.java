package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.KdyMemberDao;
import bitcamp.java93.domain.KdyMember;
import bitcamp.java93.service.KdyMemberService;

@Service
public class KdyMemberServiceImpl implements KdyMemberService {
  
  @Autowired
  KdyMemberDao kdyMemberDao;

  @Override
  public List<KdyMember> list() throws Exception {

    return kdyMemberDao.selectList();
  }
  
  @Override
  public int getSize() throws Exception {
    return kdyMemberDao.countAll();
  }

  @Override
  public KdyMember get(int no) throws Exception {
    return kdyMemberDao.selectOne(no);
  }

  @Override
  public void getPhotPath(String newFilename) {
     kdyMemberDao.getPhotPath(newFilename);  
  }

}
