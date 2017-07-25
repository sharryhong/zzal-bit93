package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.DyMemberDao;
import bitcamp.java93.domain.DyMember;
import bitcamp.java93.service.DyMemberService;

@Service
public class DyMemberServiceImpl implements DyMemberService {
  
  @Autowired
  DyMemberDao dyMemberDao;

  @Override
  public List<DyMember> list() throws Exception {

    return dyMemberDao.selectList();
  }
  
  @Override
  public int getSize() throws Exception {
    return dyMemberDao.countAll();
  }

  @Override
  public DyMember get(int no) throws Exception {
    return dyMemberDao.selectOne(no);
  }

  @Override
  public String getPhotPath(String path) {
    return dyMemberDao.updatePhot(path);
  }

}
