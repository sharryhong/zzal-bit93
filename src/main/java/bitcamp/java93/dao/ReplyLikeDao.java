package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.ReplyLike;

public interface ReplyLikeDao {
  void insert(ReplyLike replyLike);
  void deleteReplyLike(ReplyLike replyLike);
  int countReplyLike(int zzalnumber, int memberNumber);
  ReplyLike selectList(ReplyLike replyLike);
  List<ReplyLike> allLikeList(int memberNumber);
  Object countLikeReply(int replyNumber);
}
