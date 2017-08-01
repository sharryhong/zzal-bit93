package bitcamp.java93.service;

import bitcamp.java93.domain.Subscribe;

public interface SubscribeService {
  Subscribe list(Subscribe subscribe) throws Exception;
  //int getSize() throws Exception;
  void addCollec(Subscribe subscribe);
  void deleteCollec(Subscribe subscribe);
}
