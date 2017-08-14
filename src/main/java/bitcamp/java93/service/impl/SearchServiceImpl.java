package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import bitcamp.java93.dao.NoticeDao;
import bitcamp.java93.domain.Notice;
import bitcamp.java93.service.Search;
import bitcamp.java93.service.SearchService;

public class SearchServiceImpl implements SearchService {
	
	@Autowired
	SearchDao searchDao;
	
	@Override
		public List<Search> searchlist(String no) throws Exception {
		// TODO Auto-generated method stub
		return ;
	}

}
