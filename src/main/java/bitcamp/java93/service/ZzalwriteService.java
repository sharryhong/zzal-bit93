package bitcamp.java93.service;

import java.util.HashMap;
import java.util.Map;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;

public interface ZzalwriteService {
  Zzal add(Zzal zzal) throws Exception;
  void pageAdd(Page page) throws Exception;
  HashMap<String, Object> findTmplist(HashMap<String, Object> map)throws Exception;
}
