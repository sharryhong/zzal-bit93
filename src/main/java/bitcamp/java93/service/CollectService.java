package bitcamp.java93.service;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Collect;
import bitcamp.java93.domain.Subscribe;

public interface CollectService {
  List<Collect> list(int no) throws Exception;
  List<Collect> publiclist(int no) throws Exception;
  List<Collect> subslist(int mno) throws Exception;
  List<Collect> selectzzalList(HashMap<String, Object> map) throws Exception;
  List<Collect> temporaryzzalList(HashMap<String, Object> map) throws Exception;
  List<Collect> detialzzalList(HashMap<String, Object> map) throws Exception;
  List<Collect> likezzal(int mno) throws Exception;
  int getSize() throws Exception;
  Collect get(int no) throws Exception; // get()
  Collect selectUser(int no);
  void add(Collect collect) throws Exception;
  void update(Collect collect) throws Exception; // update()
  /*void remove(int no) throws Exception; // remove()*/
  HashMap<String, Object> getcount(int cono);
  List<Collect> selectAllList(int no) throws Exception;
  void remove(Subscribe subscribe) throws Exception; //delete subscribe
  
  
  
  
}
