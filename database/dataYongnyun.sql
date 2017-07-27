-- 회원
insert into memb(mno,nick,email,pwd,pic) values(1,'zzal','zzal@test0.com',password('1111'),null);
insert into memb(mno,nick,email,pwd,pic) values(2,'짤렉터','zzal02@test.com',password('1111'),null);
insert into memb(mno,nick,email,pwd,pic) values(3,'짤렉트라1','zzal03@test.com',password('1111'),'image/sul.jpg');
insert into memb(mno,nick,email,pwd,pic) values(4,'짤렉트라2','zzal04@test.com',password('1111'),'image/01images.jpg');
insert into memb(mno,nick,email,pwd,pic) values(5,'zzals','zzal05@test.com',password('1111'),'image/user.jpg');
insert into memb(mno,nick,email,pwd,pic) values(6,'짤렉터1','zzal06@test.com',password('1111'),'image/user01.jpg');
insert into memb(mno,nick,email,pwd,pic) values(7,'짤렉터2','zzal07@test.com',password('1111'),'image/friday.jpg');
insert into memb(mno,nick,email,pwd,pic) values(8,'짤렉터3','zzal08@test.com',password('1111'),'image/asd.jpg');
insert into memb(mno,nick,email,pwd,pic) values(9,'짤렉터4','zzal09@test.com',password('1111'),'image/collect01.jpg');
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
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(2,1,3,'짤강2','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(3,2,4,'짤강3','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(4,2,8,'짤강4','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(5,1,2,'짤강5','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(6,3,5,'짤강6','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(7,3,6,'짤강7','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(8,1,3,'짤강8','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(9,9,7,'짤강9','2017-01-31');
insert into zzal_lect(zzno,mno,cno,titl,cdt) values(10,8,2,'짤강10','2017-01-31');
