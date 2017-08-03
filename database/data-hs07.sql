-- 회원
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(1,'이완 맥그리거','zzal01@test.com',password('1111'),'user.jpg','zzal','admin',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(2,'성룡여친','zzal02@test.com',password('1111'),'oh.jpg','zzal','zzaler',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(3,'하핫','zzal03@test.com',password('1111'),'ohh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(4,'아싸리','zzal04@test.com',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(5,'아뵤','a',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(6,'김대연','kdy8982@test.com',password('1111'), 'sul.jpg','zzal','zzaler',false);

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
insert into colct(cono,mno,title,cont,pic,pub) values(1,1,'요리모음집','요리를 모을 것이다.','collect01.jpeg',true);
insert into colct(cono,mno,title,cont,pic,pub) values(2,1,'기타를 배우고 싶다','하루 한 곡!','collect02.jpg',false);
insert into colct(cono,mno,title,cont,pic,pub) values(3,2,'English','자주쓰는 50문장','co-bg.png',true);
insert into colct(cono,mno,title,cont,pic,pub) values(4,2,'코딩','C부터','category07.jpg',true);

-- 짤강의
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, 1, '짤강입니다1', '1501469040779_1.gif', '2017-01-01', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(2, 2, 1, 2, '짤강입니다2', '1501469078803_2_800.png', '2017-01-01', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(3, 2, 4, 1, '짤강3','1501470860079_4_800.JPEG','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(4, 2, 8, 3, '짤강4','1501478737086_2.gif','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(5, 1, 2, 2, '짤강5','1501499886546_2_800.JPEG','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(6, 3, 5, 4, '짤강6','1501469040779_1.gif','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(7, 3, 6, 2, '짤강7','1501469078803_2_800.png','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(8, 1, 3, 3, '짤강8','1501470860079_4_800.JPEG','2017-01-31', false);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(9, 4, 7, 2, '짤강9','1501478737086_2.gif','2017-01-31', true);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp) values(10,5, 2, 4, '짤강10','1501577830969_1_800.JPEG','2017-01-31', false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, '짤강입니다', '1501577830969_1_800.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, '짤강입니다', '1501469078803_2_800.png', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, '짤강입니다', '1501478737086_2.gif', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, 1, '짤강입니다', '1501469040779_1.gif', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(3, 2, 1, '짤강입니다', '1501577830969_1_800.JPEG', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(4, 3, 2, '폭염특보 문자를 절대 무시하면 안 되는 이유!', '1501478737086_2.gif', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 4, 2, '체지방을 불태우는 러닝머신 활용법', '1501469040779_1.gif', curdate(), true);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 9, NULL, '체지방을 불태우는 러닝머신 활용법', '1501469504309_3_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(2, 8, NULL, '체지방을 불태우는 러닝머신 활용법', '1501577830969_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(3, 7, NULL, '체지방을 불태우는 러닝머신 활용법', '1501478737086_2.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(4, 6, NULL, '체지방을 불태우는 러닝머신 활용법', '1501469040779_1.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 5, NULL, '체지방을 불태우는 러닝머신 활용법', '1501470860079_4_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 4, NULL, '체지방을 불태우는 러닝머신 활용법', '1501472352922_1_500.JPEG', curdate(), false);

insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 9, NULL, '짤스쿨 홧팅!!!', '1501469504309_3_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(2, 8, NULL, '짤스쿨 홧팅!!!', '1501577830969_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(3, 7, NULL, '짤스쿨 홧팅!!!', '1501478737086_2.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(4, 6, NULL, '인기짤강을 향하여', '1501469040779_1.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 5, NULL, '체지방을 불태우는 러닝머신 활용법', '1501470860079_4_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 4, NULL, '체지방을 불태우는 러닝머신 활용법', '1501472352922_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 9, NULL, '체지방을 불태우는 러닝머신 활용법', '1501469504309_3_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(2, 8, NULL, '체지방을 불태우는 러닝머신 활용법', '1501577830969_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(3, 7, NULL, '체지방을 불태우는 러닝머신 활용법', '1501478737086_2.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(4, 6, NULL, '인기짤강을 향하여', '1501469040779_1.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 5, NULL, '체지방을 불태우는 러닝머신 활용법', '1501470860079_4_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 4, NULL, '체지방을 불태우는 러닝머신 활용법', '1501472352922_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 9, NULL, '인기짤강을 향하여', '1501469504309_3_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(2, 8, NULL, '체지방을 불태우는 러닝머신 활용법', '1501577830969_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(3, 7, NULL, '체지방을 불태우는 러닝머신 활용법', '1501478737086_2.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(4, 6, NULL, '체지방을 불태우는 러닝머신 활용법', '1501469040779_1.gif', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 5, NULL, '체지방을 불태우는 러닝머신 활용법', '1501470860079_4_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(5, 4, NULL, '체지방을 불태우는 러닝머신 활용법', '1501472352922_1_500.JPEG', curdate(), false);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp) values(1, 1, NULL, '헤헷', '1501478737086_2.gif', curdate(), false);

--좋아요!
insert into lik(zzno,mno,cdt) values(1,1,'2017-07-02');
insert into lik(zzno,mno,cdt) values(1,2,'2017-07-09');
insert into lik(zzno,mno,cdt) values(1,3,'2017-07-04');
insert into lik(zzno,mno,cdt) values(2,3,'2017-07-03');
insert into lik(zzno,mno,cdt) values(2,1,'2017-07-07');
insert into lik(zzno,mno,cdt) values(1,4,'2017-07-08');
insert into lik(zzno,mno,cdt) values(1,5,'2017-07-02');
insert into lik(zzno,mno,cdt) values(3,5,curdate());
insert into lik(zzno,mno,cdt) values(5,1,curdate());
insert into lik(zzno,mno,cdt) values(9,2,curdate());
insert into lik(zzno,mno,cdt) values(9,3,curdate());
insert into lik(zzno,mno,cdt) values(14,2,curdate());
insert into lik(zzno,mno,cdt) values(14,5,curdate());
insert into lik(zzno,mno,cdt) values(14,1,curdate());
insert into lik(zzno,mno,cdt) values(1,1,curdate());
insert into lik(zzno,mno,cdt) values(2,4,curdate());
insert into lik(zzno,mno,cdt) values(4,4,curdate());
insert into lik(zzno,mno,cdt) values(42,1,curdate());
insert into lik(zzno,mno,cdt) values(42,2,curdate());

-- 새로운 댓글 추가(insert)
insert into reply(cont, cdt, re_like,report,zzno,mno) values('덧글1 ', current_timestamp(), false, false, 1, 1);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('나는 2댓글 내용입니다 ', current_timestamp(), true, false, 1, 2);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글3입니다. 정말 이쁜 사진이네요!', current_timestamp(), true, false, 1, 3);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글4', current_timestamp(), true, false, 2, 3);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글5', current_timestamp(), false, false, 2, 2);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글6', current_timestamp(), false, false, 3, 4);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글7', current_timestamp(), false, false, 3, 1);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글8', current_timestamp(), false, false, 7, 5);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('헤헷댓글', current_timestamp(), false, false, 42, 3);

-- 댓글 테이블 검색
select rno, cont, date_format(cdt, '%Y-%m-%d %H:%i'), re_like, report, zzno, mno
from reply
