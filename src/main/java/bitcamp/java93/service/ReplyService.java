package bitcamp.java93.service;  

import java.util.List;

import bitcamp.java93.domain.Reply;

public interface ReplyService {
  List<Reply> list() throws Exception;
  /*List<Reply> replyOne() throws Exception;*/
  int getSize() throws Exception;
  
  
//  List<Reply> add(Reply reply)throws Exception;
  
  void add(Reply reply) throws Exception;
  void remove(int no) throws Exception;
  
}
