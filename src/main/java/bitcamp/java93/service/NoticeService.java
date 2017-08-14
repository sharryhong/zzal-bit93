package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Notice;

public interface NoticeService {
  List<Notice> list(int no) throws Exception;
  	
}
