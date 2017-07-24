-- 회원 
insert into memb(mno,nick,email,pwd) values(1,'zzal','zzal@test.com',password('1111'));
insert into memb(mno,nick,email,pwd) values(2,'짤렉터','zzal02@test.com',password('1111'));


-- 카테고리 
insert into catg(cno,name) values(1,'음악');
insert into catg(cno,name) values(2,'사진, 여행');
insert into catg(cno,name) values(3,'예술, 문화');
insert into catg(cno,name) values(4,'연예, 가족');
insert into catg(cno,name) values(5,'요리');
insert into catg(cno,name) values(6,'경제');
insert into catg(cno,name) values(7,'IT');
insert into catg(cno,name) values(8,'직업, 진로');
insert into catg(cno,name) values(9,'패션, 뷰티');

-- 짤강의
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(1,1,1,'짤강1','2017-01-31');
