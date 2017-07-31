package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Collect;
import bitcamp.java93.domain.ZzalLike;

public interface CollectService {
  List<Collect> list(int no) throws Exception;
  int getSize() throws Exception;
  Collect get(int no) throws Exception; // get()
 //  void subsList(Collect collect);	
}
