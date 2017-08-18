package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectService {
  List<Collect> list(int no) throws Exception;
  List<Collect> publiclist(int no) throws Exception;
  List<Collect> selectzzalList(int mno) throws Exception;
  List<Collect> temporaryzzalList(int mno) throws Exception;
  /*void hitCountUp(Collect collect) throws Exception;*/
  /*List<Collect> myzzalList(int mno) throws Exception;*/
  int getSize() throws Exception;
  Collect get(int no) throws Exception; // get()
  void add(Collect collect) throws Exception;
  void update(Collect collect) throws Exception; // update()
  void remove(int no) throws Exception; // remove()
  //  void subsList(Collect collect);	
  List<Collect> likezzal(int mno) throws Exception; 
}
