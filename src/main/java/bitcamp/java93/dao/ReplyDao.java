package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Reply;

public interface ReplyDao {
  List<Reply> selectBestReplyList(int zzalnumber);
  List<Reply> selectList(int zzalnumber);
  
  int countReply(int zzalnumber);
  void insert(Reply reply);
  
  
  int deleteNoticeParentRep(Reply reply);
  int deleteReplyMemb(Reply reply);
  int deleteParentRep(Reply reply);
  
  
  int deleteSonRep(Reply reply);
  void rerepinsert(Reply reply);
  
  void replyLike(Reply reply);
  void replydetail(Reply reply);
  void replyLikeCountPlus(Reply reply);
  void replyLikeCountMinus(Reply reply);
}
