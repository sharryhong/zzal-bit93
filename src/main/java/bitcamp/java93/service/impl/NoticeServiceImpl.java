package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.NoticeDao;
import bitcamp.java93.domain.Notice;
import bitcamp.java93.service.NoticeService;


@Service
public class NoticeServiceImpl implements NoticeService {
	@Autowired NoticeDao noticeDao;
	@Override
	public List<Notice> list(int no) throws Exception {
		// TODO Auto-generated method stub
		return noticeDao.noticeList(no);
	}
	@Override
	public int getcount(int mno) {
		// TODO Auto-generated method stub
		return noticeDao.getCnt(mno);
	}
	@Override
	public void deleteNo(int nono) {
		noticeDao.deleteNo(nono);
		
	}
	@Override
	public void updateYnn(int mno) {
		noticeDao.updateNo(mno);
		
	}

}
