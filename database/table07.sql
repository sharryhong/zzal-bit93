-- 회원
DROP TABLE IF EXISTS MEMB RESTRICT;

-- 짤강의
DROP TABLE IF EXISTS ZZAL_LECT RESTRICT;

-- 짤강의 페이지
DROP TABLE IF EXISTS PAGE RESTRICT;

-- 구독
DROP TABLE IF EXISTS SUBS RESTRICT;

-- 카테고리
DROP TABLE IF EXISTS CATG RESTRICT;

-- 댓글
DROP TABLE IF EXISTS REPLY RESTRICT;

-- favorCatg
DROP TABLE IF EXISTS FAVOR_CATG RESTRICT;

-- 좋아요
DROP TABLE IF EXISTS LIK RESTRICT;

-- 컬렉션
DROP TABLE IF EXISTS COLCT RESTRICT;

-- 컬렉션짤강
DROP TABLE IF EXISTS ZZALCOLCT RESTRICT;

-- QnA
DROP TABLE IF EXISTS QNA RESTRICT;

-- 회원
CREATE TABLE MEMB (
	MNO   INTEGER      NOT NULL COMMENT '회원코드', -- 회원코드
	NICK  VARCHAR(30)  NOT NULL COMMENT '닉네임', -- 닉네임
	EMAIL VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
	STYPE VARCHAR(20)  NULL     COMMENT '가입유형', -- 가입유형
	PWD   VARCHAR(50)  NOT NULL COMMENT '패스워드', -- 패스워드
	MTYPE VARCHAR(20)  NULL     COMMENT '회원유형', -- 회원유형
	PIC   VARCHAR(255) NULL     COMMENT '사진', -- 사진
	AUTH  BOOLEAN      NULL     COMMENT '가입여부' -- 가입여부
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMB
	ADD CONSTRAINT PK_MEMB -- 회원 Primary key
		PRIMARY KEY (
			MNO -- 회원코드
		);

-- 회원 Unique Index
CREATE UNIQUE INDEX UIX_MEMB
	ON MEMB ( -- 회원
		NICK ASC -- 닉네임
	);

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMB2
	ON MEMB ( -- 회원
		EMAIL ASC, -- 이메일
		STYPE ASC  -- 가입유형
	);

-- 회원 Index
CREATE INDEX IX_MEMB
	ON MEMB( -- 회원
		NICK ASC -- 닉네임
	);

ALTER TABLE MEMB
	MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원코드';

-- 짤강의
CREATE TABLE ZZAL_LECT (
	ZZNO INTEGER      NOT NULL COMMENT '짤강의 코드', -- 짤강의 코드
	MNO  INTEGER      NOT NULL COMMENT '회원코드', -- 회원코드
	CNO  INTEGER      NOT NULL COMMENT '카테고리 코드', -- 카테고리 코드
	CONO INTEGER      NULL     COMMENT '컬렉션일련번호', -- 컬렉션일련번호
	TITL VARCHAR(255) NOT NULL COMMENT '짤강의제목', -- 짤강의제목
	PIC  VARCHAR(255) NOT NULL COMMENT '대표 사진', -- 대표 사진
	CDT  DATETIME     NOT NULL COMMENT '짤강의 게시날짜', -- 짤강의 게시날짜
	ZTMP BOOLEAN      NULL     COMMENT '임시저장여부' -- 임시저장여부
)
COMMENT '짤강의';

-- 짤강의
ALTER TABLE ZZAL_LECT
	ADD CONSTRAINT PK_ZZAL_LECT -- 짤강의 기본키
		PRIMARY KEY (
			ZZNO -- 짤강의 코드
		);

ALTER TABLE ZZAL_LECT
	MODIFY COLUMN ZZNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '짤강의 코드';

-- 짤강의 페이지
CREATE TABLE PAGE (
	ZPNO INTEGER      NOT NULL COMMENT '짤강의페이지일련번호', -- 짤강의페이지일련번호
	ZZNO INTEGER      NOT NULL COMMENT '짤강의 코드', -- 짤강의 코드
	PGNO INTEGER      NOT NULL COMMENT '페이지번호', -- 페이지번호
	TYPE VARCHAR(20)  NULL     COMMENT '유형', -- 유형
	PIC  VARCHAR(255) NULL     COMMENT '이미지/동영상', -- 이미지/동영상
	CONT MEDIUMTEXT   NOT NULL COMMENT '내용' -- 내용
)
COMMENT '짤강의 페이지';

-- 짤강의 페이지
ALTER TABLE PAGE
	ADD CONSTRAINT PK_PAGE -- 짤강의 페이지 기본키
		PRIMARY KEY (
			ZPNO -- 짤강의페이지일련번호
		);

ALTER TABLE PAGE
	MODIFY COLUMN ZPNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '짤강의페이지일련번호';

-- 구독
CREATE TABLE SUBS (
	MNO  INTEGER NOT NULL COMMENT '회원코드', -- 회원코드
	CONO INTEGER NOT NULL COMMENT '컬렉션일련번호' -- 컬렉션일련번호
)
COMMENT '구독';

-- 구독
ALTER TABLE SUBS
	ADD CONSTRAINT PK_SUBS -- 구독 기본키
		PRIMARY KEY (
			MNO,  -- 회원코드
			CONO  -- 컬렉션일련번호
		);

-- 카테고리
CREATE TABLE CATG (
	CNO  INTEGER      NOT NULL COMMENT '카테고리 코드', -- 카테고리 코드
	NAME VARCHAR(255) NOT NULL COMMENT '카테고리명' -- 카테고리명
)
COMMENT '카테고리';

-- 카테고리
ALTER TABLE CATG
	ADD CONSTRAINT PK_CATG -- 카테고리 기본키
		PRIMARY KEY (
			CNO -- 카테고리 코드
		);

-- 카테고리 유니크 인덱스
CREATE UNIQUE INDEX UIX_CATG
	ON CATG ( -- 카테고리
		NAME ASC -- 카테고리명
	);

ALTER TABLE CATG
	MODIFY COLUMN CNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '카테고리 코드';

-- 댓글
CREATE TABLE REPLY (
	RNO      INTEGER    NOT NULL COMMENT '댓글 코드', -- 댓글 코드
	CONT     MEDIUMTEXT NOT NULL COMMENT '내용', -- 내용
	CDT      DATETIME   NOT NULL COMMENT '게시 날짜', -- 게시 날짜
	RE_LIKE  BOOLEAN    NULL     COMMENT '댓글좋아요', -- 댓글좋아요
	REPORT   BOOLEAN    NULL     COMMENT '신고', -- 신고
	REPARENT INTEGER    NULL     COMMENT '대댓글번호', -- 대댓글번호
	REORDER  INTEGER    NULL     COMMENT '순서', -- 순서
	ZZNO     INTEGER    NOT NULL COMMENT '짤강의 코드', -- 짤강의 코드
	MNO      INTEGER    NOT NULL COMMENT '회원코드' -- 회원코드
)
COMMENT '댓글';

-- 댓글
ALTER TABLE REPLY
	ADD CONSTRAINT PK_REPLY -- 댓글 기본키
		PRIMARY KEY (
			RNO -- 댓글 코드
		);

ALTER TABLE REPLY
	MODIFY COLUMN RNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '댓글 코드';

-- favorCatg
CREATE TABLE FAVOR_CATG (
	MNO INTEGER NOT NULL COMMENT '회원코드', -- 회원코드
	CNO INTEGER NOT NULL COMMENT '카테고리 코드' -- 카테고리 코드
)
COMMENT 'favorCatg';

-- favorCatg
ALTER TABLE FAVOR_CATG
	ADD CONSTRAINT PK_FAVOR_CATG -- favorCatg 기본키
		PRIMARY KEY (
			MNO, -- 회원코드
			CNO  -- 카테고리 코드
		);

-- 좋아요
CREATE TABLE LIK (
	MNO  INTEGER  NOT NULL COMMENT '회원코드', -- 회원코드
	ZZNO INTEGER  NOT NULL COMMENT '짤강의 코드', -- 짤강의 코드
	CDT  DATETIME NULL     COMMENT '날짜' -- 날짜
)
COMMENT '좋아요';

-- 좋아요
ALTER TABLE LIK
	ADD CONSTRAINT PK_LIK -- 좋아요 기본키
		PRIMARY KEY (
			MNO,  -- 회원코드
			ZZNO  -- 짤강의 코드
		);

-- 컬렉션
CREATE TABLE COLCT (
	CONO  INTEGER      NOT NULL COMMENT '컬렉션일련번호', -- 컬렉션일련번호
	MNO   INTEGER      NOT NULL COMMENT '회원코드', -- 회원코드
	TITLE VARCHAR(255) NOT NULL COMMENT '컬렉션제목', -- 컬렉션제목
	CONT  MEDIUMTEXT   NULL     COMMENT '컬렉션내용', -- 컬렉션내용
	PIC   VARCHAR(255) NULL     COMMENT '컬렉션 사진', -- 컬렉션 사진
	PUB   BOOLEAN      NULL     COMMENT '비공개여부' -- 비공개여부
)
COMMENT '컬렉션';

-- 컬렉션
ALTER TABLE COLCT
	ADD CONSTRAINT PK_COLCT -- 컬렉션 기본키
		PRIMARY KEY (
			CONO -- 컬렉션일련번호
		);

ALTER TABLE COLCT
	MODIFY COLUMN CONO INTEGER NOT NULL AUTO_INCREMENT COMMENT '컬렉션일련번호';

-- 컬렉션짤강
CREATE TABLE ZZALCOLCT (
	CONO INTEGER NOT NULL COMMENT '컬렉션일련번호', -- 컬렉션일련번호
	ZZNO INTEGER NOT NULL COMMENT '짤강의 코드' -- 짤강의 코드
)
COMMENT '컬렉션짤강';

-- 컬렉션짤강
ALTER TABLE ZZALCOLCT
	ADD CONSTRAINT PK_ZZALCOLCT -- 컬렉션짤강 기본키
		PRIMARY KEY (
			CONO, -- 컬렉션일련번호
			ZZNO  -- 짤강의 코드
		);

-- QnA
CREATE TABLE QNA (
	QANO INTEGER    NOT NULL COMMENT '질문코드', -- 질문코드
	QST  MEDIUMTEXT NOT NULL COMMENT '질문', -- 질문
	CDT  DATETIME   NOT NULL COMMENT '등록일', -- 등록일
	ANR  MEDIUMTEXT NOT NULL COMMENT '답변', -- 답변
	ADT  DATETIME   NOT NULL COMMENT '답변일', -- 답변일
	MNO  INTEGER    NOT NULL COMMENT '회원코드' -- 회원코드
)
COMMENT 'QnA';

-- QnA
ALTER TABLE QNA
	ADD CONSTRAINT PK_QNA -- QnA 기본키
		PRIMARY KEY (
			QANO -- 질문코드
		);

ALTER TABLE QNA
	MODIFY COLUMN QANO INTEGER NOT NULL AUTO_INCREMENT COMMENT '질문코드';

-- 짤강의
ALTER TABLE ZZAL_LECT
	ADD CONSTRAINT FK_CATG_TO_ZZAL_LECT -- 카테고리 -> 짤강의
		FOREIGN KEY (
			CNO -- 카테고리 코드
		)
		REFERENCES CATG ( -- 카테고리
			CNO -- 카테고리 코드
		);

-- 짤강의
ALTER TABLE ZZAL_LECT
	ADD CONSTRAINT FK_MEMB_TO_ZZAL_LECT -- 회원 -> 짤강의
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- 짤강의
ALTER TABLE ZZAL_LECT
	ADD CONSTRAINT FK_COLCT_TO_ZZAL_LECT -- 컬렉션 -> 짤강의
		FOREIGN KEY (
			CONO -- 컬렉션일련번호
		)
		REFERENCES COLCT ( -- 컬렉션
			CONO -- 컬렉션일련번호
		);

-- 짤강의 페이지
ALTER TABLE PAGE
	ADD CONSTRAINT FK_ZZAL_LECT_TO_PAGE -- 짤강의 -> 짤강의 페이지
		FOREIGN KEY (
			ZZNO -- 짤강의 코드
		)
		REFERENCES ZZAL_LECT ( -- 짤강의
			ZZNO -- 짤강의 코드
		);

-- 구독
ALTER TABLE SUBS
	ADD CONSTRAINT FK_MEMB_TO_SUBS -- 회원 -> 구독
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- 구독
ALTER TABLE SUBS
	ADD CONSTRAINT FK_COLCT_TO_SUBS -- 컬렉션 -> 구독
		FOREIGN KEY (
			CONO -- 컬렉션일련번호
		)
		REFERENCES COLCT ( -- 컬렉션
			CONO -- 컬렉션일련번호
		);

-- 댓글
ALTER TABLE REPLY
	ADD CONSTRAINT FK_ZZAL_LECT_TO_REPLY -- 짤강의 -> 댓글
		FOREIGN KEY (
			ZZNO -- 짤강의 코드
		)
		REFERENCES ZZAL_LECT ( -- 짤강의
			ZZNO -- 짤강의 코드
		);

-- 댓글
ALTER TABLE REPLY
	ADD CONSTRAINT FK_MEMB_TO_REPLY -- 회원 -> 댓글
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- favorCatg
ALTER TABLE FAVOR_CATG
	ADD CONSTRAINT FK_MEMB_TO_FAVOR_CATG -- 회원 -> favorCatg
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- favorCatg
ALTER TABLE FAVOR_CATG
	ADD CONSTRAINT FK_CATG_TO_FAVOR_CATG -- 카테고리 -> favorCatg
		FOREIGN KEY (
			CNO -- 카테고리 코드
		)
		REFERENCES CATG ( -- 카테고리
			CNO -- 카테고리 코드
		);

-- 좋아요
ALTER TABLE LIK
	ADD CONSTRAINT FK_MEMB_TO_LIK -- 회원 -> 좋아요
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- 좋아요
ALTER TABLE LIK
	ADD CONSTRAINT FK_ZZAL_LECT_TO_LIK -- 짤강의 -> 좋아요
		FOREIGN KEY (
			ZZNO -- 짤강의 코드
		)
		REFERENCES ZZAL_LECT ( -- 짤강의
			ZZNO -- 짤강의 코드
		);

-- 컬렉션
ALTER TABLE COLCT
	ADD CONSTRAINT FK_MEMB_TO_COLCT -- 회원 -> 컬렉션
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MEMB ( -- 회원
			MNO -- 회원코드
		);

-- 컬렉션짤강
ALTER TABLE ZZALCOLCT
	ADD CONSTRAINT FK_COLCT_TO_ZZALCOLCT -- 컬렉션 -> 컬렉션짤강
		FOREIGN KEY (
			CONO -- 컬렉션일련번호
		)
		REFERENCES COLCT ( -- 컬렉션
			CONO -- 컬렉션일련번호
		);

-- 컬렉션짤강
ALTER TABLE ZZALCOLCT
	ADD CONSTRAINT FK_ZZAL_LECT_TO_ZZALCOLCT -- 짤강의 -> 컬렉션짤강
		FOREIGN KEY (
			ZZNO -- 짤강의 코드
		)
		REFERENCES ZZAL_LECT ( -- 짤강의
			ZZNO -- 짤강의 코드
		);

-- QnA
ALTER TABLE QNA
	ADD CONSTRAINT FK_MEMB_TO_QNA -- 회원 -> QnA
		FOREIGN KEY (
			MNO -- 회원코드
		)
		REFERENCES MY_SCHEMA.MEMB ( -- 회원
			MNO -- 회원코드
		);