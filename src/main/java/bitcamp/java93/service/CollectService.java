package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectService {
  List<Collect> list(int no) throws Exception;
  int getSize() throws Exception;
  Collect get(int no) throws Exception; // get()
 //  void subsList(Collect collect);	
  void add(Collect collect) throws Exception;
  void remove(int no) throws Exception; // remove()
}
