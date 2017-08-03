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
  public List<Reply> list(int zzalnumber) throws Exception  {
    return replyDao.selectList(zzalnumber);
  }

/*  @Override
  public List<Reply> replyOne() throws Exception {
    return replyDao.replyOne();
  }*/

  @Override
  public int getSize(int zzalnumber) {
    System.out.println(zzalnumber+"daogetsize");
    return replyDao.countReply(zzalnumber);
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
  public void rerepadd(Reply reply) throws Exception {
    replyDao.rerepinsert(reply);
  }

  @Override
  public void remove(Reply reply) throws Exception {
    replyDao.deleteParentRep(reply);
  }

  @Override
  public void removeSonReply(Reply reply) throws Exception {
    replyDao.deleteSonRep(reply);
  }
  
  
  
  
} 
