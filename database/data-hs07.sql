-- 회원
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(1,'이완 맥그리거','zzal01@test.com',password('1111'),'user.jpg','zzal','admin',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(2,'성룡여친','zzal02@test.com',password('1111'),'oh.jpg','zzal','zzaler',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(3,'하핫','zzal03@test.com',password('1111'),'ohh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(4,'아싸리','zzal04@test.com',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(5,'아뵤','a',password('1111'),'ohhh.jpg','zzal','zzaler',false);

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
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, 1, '짤강입니다1', 'userpicture.jpg', '2017-01-01', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(2, 2, 1, 2, '짤강입니다2', 'userpicture.jpg', '2017-01-01', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(3, 2, 4, 1, '짤강3','sul.jpg','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(4, 2, 8, 3, '짤강4','ohh.jpg','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(5, 1, 2, 2, '짤강5','userpicture.jpg','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(6, 3, 5, 4, '짤강6','userpicture.jpg','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(7, 3, 6, 2, '짤강7','userpicture.jpg','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(8, 1, 3, 3, '짤강8','userpicture.jpg','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(9, 4, 7, 2, '짤강9','sul.jpg','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(10,5, 2, 4, '짤강10','ohh.jpg','2017-01-31', false);


--좋아요!
insert into lik(zzno,mno,cdt) values(1,1,'2017-07-02');
insert into lik(zzno,mno,cdt) values(1,2,'2017-07-09');
insert into lik(zzno,mno,cdt) values(1,3,'2017-07-04');
insert into lik(zzno,mno,cdt) values(2,3,'2017-07-03');
insert into lik(zzno,mno,cdt) values(2,1,'2017-07-07');
insert into lik(zzno,mno,cdt) values(1,4,'2017-07-08');
insert into lik(zzno,mno,cdt) values(1,5,'2017-07-02');
