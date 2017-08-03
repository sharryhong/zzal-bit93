package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Reply;

public interface ReplyDao {
  List<Reply> selectList(int zzalnumber);
  int countReply(int zzalnumber);
  void insert(Reply reply);
  int deleteParentRep(Reply reply);
  int deleteSonRep(Reply reply);

  
  void rerepinsert(Reply reply);
  
}
