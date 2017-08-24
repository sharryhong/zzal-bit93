package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.NoticeDao;
import bitcamp.java93.dao.ReplyDao;
import bitcamp.java93.dao.ReplyLikeDao;
import bitcamp.java93.domain.Reply;
import bitcamp.java93.service.ReplyService;

@Service
public class ReplyServiceImpl implements ReplyService {

  @Autowired
  ReplyDao replyDao;

  @Autowired
  NoticeDao noticeDao;

  @Autowired
  ReplyLikeDao replyLikeDao;

  /*  @Override
  public List<Reply> list(int zzalnumber, int memberNumber) throws Exception  {
    List<Reply> replyList = replyDao.selectList(zzalnumber);
    for(Reply reply : replyList) {
      // TODO isMyLike 값을 구한다
      int replyLikeCount = replyLikeDao.countReplyLike(zzalnumber, memberNumber);
      if(replyLikeCount > 0) {
        reply.setReplyLike(true);
      }
    }

    return replyList;
  }*/

  @Override
  public List<Reply> bestReplyList(int zzalnumber) throws Exception {
    return replyDao.selectBestReplyList(zzalnumber);
  }

  @Override
  public List<Reply> list(int zzalnumber) throws Exception {
    return replyDao.selectList(zzalnumber);
  }

  @Override
  public int getSize(int zzalnumber) {
    return replyDao.countReply(zzalnumber);
  }

  @Override
  public void add(Reply reply) throws Exception {
    replyDao.insert(reply);
    noticeDao.insReplyNotice(reply);
  }

  @Override
  public void rerepadd(Reply reply) throws Exception {
    replyDao.rerepinsert(reply);
    noticeDao.insReplyNotice(reply);
  }

  @Override
  public void remove(Reply reply) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    
    map.put("rno", reply.getReplyNumber());
    map.put("notype", "reply");
    noticeDao.deleteNo(map);

    replyDao.deleteReplyMemb(reply);
    replyDao.deleteParentRep(reply);

  }

  @Override
  public void removeSonReply(Reply reply) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    map.put("dmno",reply.getMemberNumber());
    map.put("zzno", reply.getZzalnumber());
    map.put("notype", "reply");
    noticeDao.deleteNo(map);

    replyDao.deleteSonRep(reply);
  }

  @Override
  public void replyLike(Reply reply) throws Exception {
    replyDao.replyLike(reply);
  }

  @Override
  public void replydetail(Reply reply) throws Exception {
    replyDao.replydetail(reply);
  }

  @Override
  public void replyLikeCountPlus(Reply reply) throws Exception {
    replyDao.replyLikeCountPlus(reply);
  }

  @Override
  public void replyLikeCountMinus(Reply reply) throws Exception {
    replyDao.replyLikeCountMinus(reply);
  }


} 
