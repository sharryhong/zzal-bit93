package bitcamp.java93.service;

import java.util.HashMap;
import java.util.Map;

import bitcamp.java93.domain.Page;
import bitcamp.java93.domain.Zzal;

public interface ZzalwriteService {
  Zzal add(Zzal zzal) throws Exception;
  void pageAdd(Page page,Boolean boo) throws Exception;
  
  HashMap<String, Object> findTmplist(HashMap<String, Object> map)throws Exception;
  void deteleInition(HashMap<String, Object> map) throws Exception;
}
