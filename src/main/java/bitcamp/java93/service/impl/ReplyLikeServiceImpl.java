package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ReplyLikeDao;
import bitcamp.java93.domain.ReplyLike;
import bitcamp.java93.service.ReplyLikeService;

@Service
public class ReplyLikeServiceImpl implements ReplyLikeService {

  @Autowired
  ReplyLikeDao replyLikeDao;

  @Override
  public void add(ReplyLike replyLike) throws Exception {
    replyLikeDao.insert(replyLike);
  }

  @Override
  public void remove(ReplyLike replyLike) throws Exception {
    replyLikeDao.deleteReplyLike(replyLike);
  }
  @Override
  public ReplyLike list(ReplyLike replyLike) throws Exception {
    return replyLikeDao.selectList(replyLike);
  }
//  

  @Override
  public List<ReplyLike> allLikeList(int memberNumber) {
    // TODO Auto-generated method stub
    return replyLikeDao.allLikeList(memberNumber);
    
  }

  @Override
  public Object countLikeReply(int replyNumber) {
    // TODO Auto-generated method stub
    
    return replyLikeDao.countLikeReply(replyNumber);
  }
  
} 
