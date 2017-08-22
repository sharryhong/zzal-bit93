package bitcamp.java93.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.SearchDao;
import bitcamp.java93.domain.Search;
import bitcamp.java93.service.SearchService;

@Service
public class SearchServiceImpl implements SearchService {
	
	@Autowired
	SearchDao searchDao;
	
	@Override
		public List<Search> searchlist(String keyword, int pageNo, int pageSize) throws Exception {
		HashMap<String, Object> map = new HashMap<>();
		map.put("keyword", keyword);
		map.put("pageSize", pageSize);
		map.put("startIndex", (pageNo - 1) * pageSize);
		// TODO Auto-generated method stub
		return searchDao.searchList(map);
	}

	@Override
	public List<String> getAutoList() throws Exception {
		// TODO Auto-generated method stub
		
		ArrayList<String> autoList = new ArrayList<>();
		autoList.addAll(searchDao.getNick());
		autoList.addAll(searchDao.getTitl());
		
		ArrayList<String> arr1 = new ArrayList<>();
		for(int i=0; i < searchDao.getCont().size() ; i++){
			if(searchDao.getCont().get(i)!=""){
				arr1.add(searchDao.getCont().get(i));
			}
		}
		
		autoList.addAll(arr1);
		
		System.out.println(autoList);
		Collections.sort(autoList); 
		return autoList;
	}

	
	@Override
	public int getcount(String keyword, int pageNo) {
		HashMap<String, Object> map = new HashMap<>();
		map.put("keyword", keyword);
		map.put("pageNo", pageNo);
		// TODO Auto-generated method stub
		return searchDao.searchCountAll(map);
	}

}
