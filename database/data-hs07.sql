-- 회원
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(1,'이완 맥그리거','zzal01@test.com',password('1111'),'user.jpg','zzal','admin',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(2,'성룡여친','zzal02@test.com',password('1111'),'oh.jpg','zzal','zzaler',true);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(3,'하핫','zzal03@test.com',password('1111'),'ohh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(4,'아싸리','zzal04@test.com',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(5,'아뵤','a',password('1111'),'ohhh.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(6,'김대연','kdy8982@test.com',password('1111'), 'sul.jpg','zzal','zzaler',false);
insert into memb(mno,nick,email,pwd,pic,stype,mtype,auth) values(7,'zico','zico8982@test.com',password('1111'), 'sul.jpg','zzal','zzaler',false);

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
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 1, 1, 1, '짤강입니다1', '500_1501947979874_11_1-4.jpg', '2017-01-01', true, 0);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 2, 2, 2, '짤강입니다2', '1501947988622_14_2-1.jpg', '2017-02-01', false, 50);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 3, 3, null, '짤강입니다3', '500_1501948011845_22_3-3.jpg', '2017-03-01', false, 3);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 4, 4, null, '짤강입니다4', '500_1501948017114_24_4-1.jpg', '2017-04-01', false, 5);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 5, 5, null, '짤강입니다5', '500_1501999446798_50_cooking01.jpg', '2017-05-01', false, 12);
insert into zzal_lect(zzno, mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(6, 2, 6, null, '짤강입니다6', '500_1501948028023_28_6-1.jpeg', '2017-06-01', false, 15);

insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 1, null, '음악 짤강~^^', '1501947957350_4_1-1.gif', current_timestamp(), false,22);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 1, null, '음악 짤강~^^', '500_1501947960591_5_1-1.jpg', current_timestamp(), false,4);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 1, null, '음악 짤강~^^', '1501947962863_6_1-2.gif', current_timestamp(), false,5);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 1, null, '음악 짤강~^^', '500_1501947965440_7_1-2.jpg', current_timestamp(), false,12);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 1, null, '음악 짤강~^^', '1501947969390_8_1-3.gif', current_timestamp(), false,3);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 1, null, '음악 짤강~^^', '1501947974940_10_1-4.gif', current_timestamp(), false,31);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 2, null, '사진, 여행 짤강~^^', '1501947988622_14_2-1.jpg', current_timestamp(), false,23);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 2, null, '사진, 여행 짤강~^^', '1501947985491_13_2-1.gif', current_timestamp(), false,2);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 2, null, '사진, 여행 짤강~^^', '1501947993808_16_2-2.jpg', current_timestamp(), false,51);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 2, null, '사진, 여행 짤강~^^', '1501947996606_17_2-3.jpg', current_timestamp(), false,31);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 2, null, '사진, 여행 짤강~^^', '1501948000023_18_2-4.jpeg', current_timestamp(), false,11);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 2, null, '사진, 여행 짤강~^^', '500_1501999562808_51_category02.png', current_timestamp(), false,7);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 3, null, '예술, 문화 짤강 :)', '500_1501948005787_20_3-1.jpg', current_timestamp(), false,11);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 3, null, '예술, 문화 짤강 :)', '500_1501948011845_22_3-3.jpg', current_timestamp(), false,21);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 3, null, '예술, 문화 짤강 :)', '500_1501948008987_21_3-2.jpg', current_timestamp(), false,15);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 3, null, '예술, 문화 짤강 :)', '1501998983676_47_friday.gif', current_timestamp(), false,35);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 4, null, '연애, 가족 짤강 :)', '1501948014547_23_4-1.gif', current_timestamp(), false,35);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 4, null, '연애, 가족 짤강 :)', '500_1501948017114_24_4-1.jpg', current_timestamp(), false,12);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 4, null, '연애, 가족 짤강 :)', '500_1501948022656_26_4-2.jpg', current_timestamp(), false,5);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 4, null, '연애, 가족 짤강 :)', '1501948019849_25_4-2.gif', current_timestamp(), false,3);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 5, null, '요리!! ^0^', '1501998590253_40_5-1.gif', current_timestamp(), false,15);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 5, null, '요리!! ^0^', '500_1501998955389_45_cooking.jpg', current_timestamp(), false,25);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 5, null, '요리!! ^0^', '1501998593851_41_5-2.gif', current_timestamp(), false,15);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 5, null, '요리!! ^0^', '500_1501999446798_50_cooking01.jpg', current_timestamp(), false,7);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 5, null, '요리!! ^0^', '1501998597392_42_5-3.gif', current_timestamp(), false,3);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 5, null, '요리!! ^0^', '500_1501999429109_48_zzal03.jpg', current_timestamp(), false,22);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 6, null, '경제!! ^^', '500_1501948028023_28_6-1.jpeg', current_timestamp(), false,2);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 6, null, '경제!! ^^', '1501948025331_27_6-1.gif', current_timestamp(), false,32);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 6, null, '경제!! ^^', '500_1501948031953_29_6-2.jpg', current_timestamp(), false,16);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 7, null, 'IT *^^*', '500_1501948039101_31_7-1.jpg', current_timestamp(), false,22);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 7, null, 'IT *^^*', '1501948035603_30_7-1.gif', current_timestamp(), false,12);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 7, null, 'IT *^^*', '500_1501948043129_32_7-2.jpg', current_timestamp(), false,2);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 7, null, 'IT *^^*', '500_1501998944917_44_category07.jpg', current_timestamp(), false,19);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 8, null, '직업, 진로 *^^*', '1501948051717_34_8-1.gif', current_timestamp(), false,25);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(2, 8, null, '직업, 진로 *^^*', '500_1501948054934_35_8-1.png', current_timestamp(), false,12);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 8, null, '직업, 진로 *^^*', '500_1501948059987_36_8-2.jpg', current_timestamp(), false,20);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(4, 9, null, '패션, 뷰티 :)', '1501998963147_46_ohzzal.gif', current_timestamp(), false,32);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(5, 9, null, '패션, 뷰티 :)', '500_1501999438603_49_sul.jpg', current_timestamp(), false,27);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(1, 9, null, '패션, 뷰티 :)', '500_1501948065936_38_9-2.jpg', current_timestamp(), false,7);
insert into zzal_lect(mno, cno, cono, titl, pic, cdt, ztmp, hitcnt) values(3, 9, null, '패션, 뷰티 :)', '1501948069272_39_9-3.jpg', current_timestamp(), false,7);


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
insert into lik(zzno,mno,cdt) values(54,3,curdate());
insert into lik(zzno,mno,cdt) values(54,4,curdate());
insert into lik(zzno,mno,cdt) values(54,5,curdate());
insert into lik(zzno,mno,cdt) values(51,1,curdate());
insert into lik(zzno,mno,cdt) values(51,2,curdate());
insert into lik(zzno,mno,cdt) values(51,3,curdate());
insert into lik(zzno,mno,cdt) values(51,4,curdate());
insert into lik(zzno,mno,cdt) values(51,5,curdate());
insert into lik(zzno,mno,cdt) values(52,1,curdate());
insert into lik(zzno,mno,cdt) values(52,2,curdate());
insert into lik(zzno,mno,cdt) values(52,3,curdate());
insert into lik(zzno,mno,cdt) values(18,4,curdate());
insert into lik(zzno,mno,cdt) values(36,5,curdate());
insert into lik(zzno,mno,cdt) values(36,1,curdate());
insert into lik(zzno,mno,cdt) values(36,2,curdate());
insert into lik(zzno,mno,cdt) values(36,3,curdate());
insert into lik(zzno,mno,cdt) values(23,4,curdate());
insert into lik(zzno,mno,cdt) values(23,5,curdate());
insert into lik(zzno,mno,cdt) values(23,1,curdate());
insert into lik(zzno,mno,cdt) values(23,2,curdate());
insert into lik(zzno,mno,cdt) values(23,3,curdate());

-- 새로운 댓글 추가(insert)
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('안녕하세요', current_timestamp(), true, false, 2, 4, null, 1);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('네 안녕하세요.', current_timestamp(), true, false, 2, 6, 1, 2);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('반갑습니다.', current_timestamp(), true, false, 2, 1, 1, 3);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('네 반갑습니다.', current_timestamp(), true, false, 2, 6, 1, 4);

insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('오늘의 날씨는 어떤가요', current_timestamp(), true, false, 2, 4, null, 1);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('아주 좋습니다.', current_timestamp(), true, false, 2, 6, 5, 2);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('오늘 모임에 나오시나요.', current_timestamp(), true, false, 2, 5, 5, 3);
insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('아니요. 오늘은 못나갑니다.', current_timestamp(), true, false, 2, 6, 5, 4);

insert into reply (cont, cdt, re_like, report, zzno, mno, reparent, reorder) values('^0^!', current_timestamp(), false, false, 23, 2, null, 1);

