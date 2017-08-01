package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Reply;

public interface ReplyDao {
  List<Reply> selectList();
  List<Reply> replyOne();
  int countReply();
  
  void insert(Reply reply);
  
  int delete(int no);
}
