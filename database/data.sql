-- 회원
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(1,'이완 맥그리거','zzal01@test.com',password('1111'),'user.jpg','zzal','admin',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(2,'성룡여친','zzal02@test.com',password('1111'),'oh.jpg','zzal','zzaler',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(3,'하핫','zzal03@test.com',password('1111'),'ohh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(4,'아싸리','zzal04@test.com',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(5,'아뵤','a',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(6,'김대연','kdy8982@naver.com',password('1111'), 'sul.jpg','zzal','zzaler',false);

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

-- 짤강의
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt) values(1, 1, 1, 1, '짤강입니다1', 'userpicture.jpg', '2017-01-01');
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt) values(2, 2, 1, 1, '짤강입니다2', 'userpicture.jpg', '2017-01-01');

--좋아요!
insert into lik(zzno,mno,cdt) values(1,1,'2017-07-02');
insert into lik(zzno,mno,cdt) values(1,2,'2017-07-09');
insert into lik(zzno,mno,cdt) values(1,3,'2017-07-04');
insert into lik(zzno,mno,cdt) values(2,3,'2017-07-03');
insert into lik(zzno,mno,cdt) values(2,1,'2017-07-07');
insert into lik(zzno,mno,cdt) values(1,4,'2017-07-08');
insert into lik(zzno,mno,cdt) values(1,5,'2017-07-02');

-- 새로운 댓글 추가(insert)
insert into reply(cont, cdt, re_like,report,zzno,mno) values(3,'나는 3댓글 내용입니다 ', curdate(), true, false, 100, 1);
insert into reply(cont, cdt, re_like,report,zzno,mno) values(4,'댓글4입니다. 정말 이쁜 사진이네요!', curdate(), true, false, 200, 1);

-- 댓글 테이블 검색
select rno, cont, date_format(cdt, '%Y-%m-%d %H:%i'), re_like, report, zzno, mno
from reply
