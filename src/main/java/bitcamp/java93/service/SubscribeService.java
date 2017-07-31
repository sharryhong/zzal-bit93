package bitcamp.java93.service;

import bitcamp.java93.domain.Subscribe;

public interface SubscribeService {
  Subscribe list() throws Exception;
  int getSize() throws Exception;
}
