package bitcamp.java93.service;  

import java.util.List;

import bitcamp.java93.domain.Reply;

public interface ReplyService {
  List<Reply> bestReplyList(int zzalnumber) throws Exception;
  List<Reply> list(int zzalnumber) throws Exception;
  
  int getSize(int zzalnumber) throws Exception;
  
  void add(Reply reply) throws Exception;
  void rerepadd(Reply reply) throws Exception;
  
  void remove(Reply reply) throws Exception;
  void removeSonReply(Reply reply) throws Exception;

  void replyLike(Reply reply) throws Exception;

  void replydetail(Reply reply) throws Exception;
  void replyLikeCountPlus(Reply reply) throws Exception;
  void replyLikeCountMinus(Reply reply) throws Exception;
}
