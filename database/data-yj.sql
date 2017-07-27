-- 회원
insert into memb(mno,nick,email,pwd,pic) values(1,'zzal','zzal@test.com',password('1111'),'image/user.jpg');
insert into memb(mno,nick,email,pwd,pic) values(2,'짤렉터1','zzal02@test.com',password('1111'),'image/user01.jpg');
insert into memb(mno,nick,email,pwd,pic) values(3,'짤렉터2','zzal02@test.com',password('1111'),'image/sul.jpg');
insert into memb(mno,nick,email,pwd,pic) values(4,'짤렉트라','zzal02@test.com',password('1111'),'image/sul.jpg');
insert into memb(mno,nick,email,pwd,pic) values(5,'짤렉트라젠','zzal02@test.com',password('1111'),'image/sul.jpg');

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

-- 컬렉션
insert into colct(cono,mno,title,cont,pic,public) values(1,1,'요리모음집','요리를 모을 것이다.','collect01.jpeg',true);
insert into colct(cono,mno,title,cont,pic,public) values(2,1,'기타를 배우고 싶다','하루 한 곡!','collect02.jpg',false);
insert into colct(cono,mno,title,cont,pic,public) values(3,2,'English','자주쓰는 50문장',null,true);
insert into colct(cono,mno,title,cont,pic,public) values(4,2,'코딩','C부터',null,true);


--짤강

insert into colct(cono,mno,title,cont,pic,public) values(1,1,'요리모음집','요리를 모을 것이다.','collect01.jpeg',true);