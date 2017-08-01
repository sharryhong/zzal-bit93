package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ReplyDao;
import bitcamp.java93.domain.Reply;
import bitcamp.java93.service.ReplyService;

@Service
public class ReplyServiceImpl implements ReplyService {

  @Autowired
  ReplyDao replyDao;

  @Override
  public List<Reply> list() throws Exception {
    return replyDao.selectList();
  }

/*  @Override
  public List<Reply> replyOne() throws Exception {
    return replyDao.replyOne();
  }*/

  @Override
  public int getSize() {
    return replyDao.countReply();
  }

//  @Override
//  public List<Reply> add(Reply reply) throws Exception {
//    return replyDao.insert(reply);
//  }
  @Override
  public void add(Reply reply) throws Exception {
    replyDao.insert(reply);
  }

  @Override
  public void remove(int no) throws Exception {
    replyDao.delete(no);
    
  }

//  @Override
//  public void update(Reply reply) throws Exception {
//    // TODO Auto-generated method stub
//    
//  }
} 
