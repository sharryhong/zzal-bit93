package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Notice;
import bitcamp.java93.domain.Reply;
import bitcamp.java93.domain.Subscribe;
import bitcamp.java93.domain.ZzalLike;

public interface NoticeDao {
//  Subscribe getList(Subscribe subscribe);
  List<Notice> noticeList(int mno);
  void insLikNotice(ZzalLike zzallike);
  void insReplyNotice(Reply reply);
  void insSubsNotice(Subscribe subscribe);
}
