package bitcamp.java93.service;  

import java.util.List;

import bitcamp.java93.domain.ReplyLike;

public interface ReplyLikeService {
  void add(ReplyLike replyLike) throws Exception;
  void remove(ReplyLike replyLike) throws Exception;
  ReplyLike list(ReplyLike replyLike) throws Exception;
//  List<ChoiceCategory> list(int memberNumber) throws Exception;
  List<ReplyLike> allLikeList(int memberNumber);
  Object countLikeReply(int replyNumber);
}
