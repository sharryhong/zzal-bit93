-- 회원 
insert into memb(mno,nick,email,pwd) values(1,'zzal','zzal@test.com',password('1111'));
insert into memb(mno,nick,email,pwd) values(2,'짤렉터','zzal02@test.com',password('1111'));
insert into memb(mno,nick,email,pwd,pic) values(4,'김대연','kdy8982@test.com',password('1111'), 'sul.jpg');


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


-- 존재하는 칼럼에 추가해넣기 
update memb set pic='sul.jpg' where mno='2';



-- 새로운 짤 강의 추가(insert)
insert into zzal_lect (zzno, mno, cno, titl, pic, cdt) values(100, 1, 1, '댓글달기강의', 'sul.jpg', '2017-07-26');
insert into zzal_lect (zzno, mno, cno, titl, pic, cdt) values(200, 2, 2, '사진 잘 찍기 강의', 'sul.jpg', '2017-05-26');

-- 새로운 댓글 추가(insert)
insert into reply(cont, cdt, re_like,report,zzno,mno) values('나는 3댓글 내용입니다 ', current_timestamp(), true, false, 100, 1);
insert into reply(cont, cdt, re_like,report,zzno,mno) values('댓글4입니다. 정말 이쁜 사진이네요!', current_timestamp(), true, false, 200, 1);


-- 댓글 테이블 검색
select rno, cont, date_format(cdt, '%Y-%m-%d %H:%i'), re_like, report, zzno, mno
from reply
