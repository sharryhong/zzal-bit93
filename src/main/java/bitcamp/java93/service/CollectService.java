package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Collect;

public interface CollectService {
  List<Collect> list(int num) throws Exception;
  int getSize() throws Exception;
}
