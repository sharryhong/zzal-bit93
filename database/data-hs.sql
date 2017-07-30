-- 회원
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(1,'이완 맥그리거','zzal01@test.com',password('1111'),'user.jpg','zzal','admin',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(2,'성룡여친','zzal02@test.com',password('1111'),'oh.jpg','zzal','zzaler',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(3,'하핫','zzal03@test.com',password('1111'),'ohh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(4,'아싸리','zzal04@test.com',password('1111'),'ohhh.jpg','zzal','zzaler',false);

-- 카테고리
insert into catg(cno,name) values(1,'음악');
insert into catg(cno,name) values(2,'사진·여행');
insert into catg(cno,name) values(3,'예술·문화');
insert into catg(cno,name) values(4,'연예·가족');
insert into catg(cno,name) values(5,'요리');
insert into catg(cno,name) values(6,'경제');
insert into catg(cno,name) values(7,'IT');
insert into catg(cno,name) values(8,'직업·진로');
insert into catg(cno,name) values(9,'패션·뷰티');

-- 컬렉션
insert into colct(cono,mno,title,cont,pic,public) values(1,1,'요리모음집','요리를 모을 것이다.','collect01.jpeg',true);
insert into colct(cono,mno,title,cont,pic,public) values(2,1,'기타를 배우고 싶다','하루 한 곡!','collect02.jpg',false);
insert into colct(cono,mno,title,cont,pic,public) values(3,2,'English','자주쓰는 50문장','co-bg.png',true);
insert into colct(cono,mno,title,cont,pic,public) values(4,2,'코딩','C부터','category07.jpg',true);

-- 짤강의
insert into zzal_lect(zzno, mno, cno, titl, pic, cdt) values(1, 1, 1, '짤강입니다1', 'userpicture.jpg', '2017-01-01');
insert into zzal_lect(zzno, mno, cno, titl, pic, cdt) values(2, 2, 1, '짤강입니다2', 'userpicture.jpg', '2017-01-01');

