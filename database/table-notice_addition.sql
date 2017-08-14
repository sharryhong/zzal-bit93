-- ȸ��
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- ©����
DROP TABLE IF EXISTS `ZZAL_LECT` RESTRICT;

-- ©���� ������
DROP TABLE IF EXISTS `PAGE` RESTRICT;

-- ����
DROP TABLE IF EXISTS `SUBS` RESTRICT;

-- ī�װ�
DROP TABLE IF EXISTS `CATG` RESTRICT;

-- ���
DROP TABLE IF EXISTS `REPLY` RESTRICT;

-- favorCatg
DROP TABLE IF EXISTS `FAVOR_CATG` RESTRICT;

-- ���ƿ�
DROP TABLE IF EXISTS `LIK` RESTRICT;

-- �÷���
DROP TABLE IF EXISTS `COLCT` RESTRICT;

-- �˸�
DROP TABLE IF EXISTS `NOTICE` RESTRICT;

-- QnA
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- ȸ��
CREATE TABLE `MEMB` (
	`MNO`   INTEGER      NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`NICK`  VARCHAR(30)  NOT NULL COMMENT '�г���', -- �г���
	`EMAIL` VARCHAR(40)  NOT NULL COMMENT '�̸���', -- �̸���
	`STYPE` VARCHAR(20)  NULL     COMMENT '��������', -- ��������
	`PWD`   VARCHAR(50)  NOT NULL COMMENT '�н�����', -- �н�����
	`MTYPE` VARCHAR(20)  NULL     COMMENT 'ȸ������', -- ȸ������
	`PIC`   VARCHAR(255) NULL     COMMENT '����', -- ����
	`AUTH`  BOOLEAN      NULL     COMMENT '���Կ���' -- ���Կ���
)
COMMENT 'ȸ��';

-- ȸ��
ALTER TABLE `MEMB`
	ADD CONSTRAINT `PK_MEMB` -- ȸ�� Primary key
		PRIMARY KEY (
			`MNO` -- ȸ���ڵ�
		);

-- ȸ�� Unique Index
CREATE UNIQUE INDEX `UIX_MEMB`
	ON `MEMB` ( -- ȸ��
		`NICK` ASC -- �г���
	);

-- ȸ�� ����ũ �ε���
CREATE UNIQUE INDEX `UIX_MEMB2`
	ON `MEMB` ( -- ȸ��
		`EMAIL` ASC, -- �̸���
		`STYPE` ASC  -- ��������
	);

-- ȸ�� Index
CREATE INDEX `IX_MEMB`
	ON `MEMB`( -- ȸ��
		`NICK` ASC -- �г���
	);

ALTER TABLE `MEMB`
	MODIFY COLUMN `MNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT 'ȸ���ڵ�';

-- ©����
CREATE TABLE `ZZAL_LECT` (
	`ZZNO`   INTEGER      NOT NULL COMMENT '©���� �ڵ�', -- ©���� �ڵ�
	`MNO`    INTEGER      NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`CNO`    INTEGER      NOT NULL COMMENT 'ī�װ� �ڵ�', -- ī�װ� �ڵ�
	`CONO`   INTEGER      NULL     COMMENT '�÷����Ϸù�ȣ', -- �÷����Ϸù�ȣ
	`TITL`   VARCHAR(255) NOT NULL COMMENT '©��������', -- ©��������
	`PIC`    VARCHAR(255) NOT NULL COMMENT '��ǥ ����', -- ��ǥ ����
	`CDT`    DATETIME     NOT NULL COMMENT '©���� �Խó�¥', -- ©���� �Խó�¥
	`ZTMP`   BOOLEAN      NULL     COMMENT '�ӽ����忩��', -- �ӽ����忩��
	`HITCNT` INTEGER      NULL     COMMENT '��ȸ��' -- ��ȸ��
)
COMMENT '©����';

-- ©����
ALTER TABLE `ZZAL_LECT`
	ADD CONSTRAINT `PK_ZZAL_LECT` -- ©���� �⺻Ű
		PRIMARY KEY (
			`ZZNO` -- ©���� �ڵ�
		);

ALTER TABLE `ZZAL_LECT`
	MODIFY COLUMN `ZZNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '©���� �ڵ�';

-- ©���� ������
CREATE TABLE `PAGE` (
	`ZPNO` INTEGER      NOT NULL COMMENT '©�����������Ϸù�ȣ', -- ©�����������Ϸù�ȣ
	`ZZNO` INTEGER      NOT NULL COMMENT '©���� �ڵ�', -- ©���� �ڵ�
	`PGNO` INTEGER      NOT NULL COMMENT '��������ȣ', -- ��������ȣ
	`TYPE` VARCHAR(20)  NULL     COMMENT '����', -- ����
	`PIC`  VARCHAR(255) NULL     COMMENT '�̹���/������', -- �̹���/������
	`CONT` MEDIUMTEXT   NOT NULL COMMENT '����' -- ����
)
COMMENT '©���� ������';

-- ©���� ������
ALTER TABLE `PAGE`
	ADD CONSTRAINT `PK_PAGE` -- ©���� ������ �⺻Ű
		PRIMARY KEY (
			`ZPNO` -- ©�����������Ϸù�ȣ
		);

ALTER TABLE `PAGE`
	MODIFY COLUMN `ZPNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '©�����������Ϸù�ȣ';

-- ����
CREATE TABLE `SUBS` (
	`MNO`  INTEGER NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`CONO` INTEGER NOT NULL COMMENT '�÷����Ϸù�ȣ' -- �÷����Ϸù�ȣ
)
COMMENT '����';

-- ����
ALTER TABLE `SUBS`
	ADD CONSTRAINT `PK_SUBS` -- ���� �⺻Ű
		PRIMARY KEY (
			`MNO`,  -- ȸ���ڵ�
			`CONO`  -- �÷����Ϸù�ȣ
		);

-- ī�װ�
CREATE TABLE `CATG` (
	`CNO`  INTEGER      NOT NULL COMMENT 'ī�װ� �ڵ�', -- ī�װ� �ڵ�
	`NAME` VARCHAR(255) NOT NULL COMMENT 'ī�װ���' -- ī�װ���
)
COMMENT 'ī�װ�';

-- ī�װ�
ALTER TABLE `CATG`
	ADD CONSTRAINT `PK_CATG` -- ī�װ� �⺻Ű
		PRIMARY KEY (
			`CNO` -- ī�װ� �ڵ�
		);

-- ī�װ� ����ũ �ε���
CREATE UNIQUE INDEX `UIX_CATG`
	ON `CATG` ( -- ī�װ�
		`NAME` ASC -- ī�װ���
	);

ALTER TABLE `CATG`
	MODIFY COLUMN `CNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT 'ī�װ� �ڵ�';

-- ���
CREATE TABLE `REPLY` (
	`RNO`      INTEGER    NOT NULL COMMENT '��� �ڵ�', -- ��� �ڵ�
	`CONT`     MEDIUMTEXT NOT NULL COMMENT '����', -- ����
	`CDT`      DATETIME   NOT NULL COMMENT '�Խ� ��¥', -- �Խ� ��¥
	`RE_LIKE`  BOOLEAN    NULL     COMMENT '������ƿ�', -- ������ƿ�
	`REPORT`   BOOLEAN    NULL     COMMENT '�Ű�', -- �Ű�
	`REPARENT` INTEGER    NULL     COMMENT '���۹�ȣ', -- ���۹�ȣ
	`REORDER`  INTEGER    NULL     COMMENT '����', -- ����
	`ZZNO`     INTEGER    NOT NULL COMMENT '©���� �ڵ�', -- ©���� �ڵ�
	`MNO`      INTEGER    NOT NULL COMMENT 'ȸ���ڵ�' -- ȸ���ڵ�
)
COMMENT '���';

-- ���
ALTER TABLE `REPLY`
	ADD CONSTRAINT `PK_REPLY` -- ��� �⺻Ű
		PRIMARY KEY (
			`RNO` -- ��� �ڵ�
		);

ALTER TABLE `REPLY`
	MODIFY COLUMN `RNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '��� �ڵ�';

-- favorCatg
CREATE TABLE `FAVOR_CATG` (
	`MNO` INTEGER NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`CNO` INTEGER NOT NULL COMMENT 'ī�װ� �ڵ�' -- ī�װ� �ڵ�
)
COMMENT 'favorCatg';

-- favorCatg
ALTER TABLE `FAVOR_CATG`
	ADD CONSTRAINT `PK_FAVOR_CATG` -- favorCatg �⺻Ű
		PRIMARY KEY (
			`MNO`, -- ȸ���ڵ�
			`CNO`  -- ī�װ� �ڵ�
		);

-- ���ƿ�
CREATE TABLE `LIK` (
	`MNO`  INTEGER  NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`ZZNO` INTEGER  NOT NULL COMMENT '©���� �ڵ�', -- ©���� �ڵ�
	`CDT`  DATETIME NULL     COMMENT '��¥' -- ��¥
)
COMMENT '���ƿ�';

-- ���ƿ�
ALTER TABLE `LIK`
	ADD CONSTRAINT `PK_LIK` -- ���ƿ� �⺻Ű
		PRIMARY KEY (
			`MNO`,  -- ȸ���ڵ�
			`ZZNO`  -- ©���� �ڵ�
		);

-- �÷���
CREATE TABLE `COLCT` (
	`CONO`  INTEGER      NOT NULL COMMENT '�÷����Ϸù�ȣ', -- �÷����Ϸù�ȣ
	`MNO`   INTEGER      NOT NULL COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`TITLE` VARCHAR(255) NOT NULL COMMENT '�÷�������', -- �÷�������
	`CONT`  MEDIUMTEXT   NULL     COMMENT '�÷��ǳ���', -- �÷��ǳ���
	`PIC`   VARCHAR(255) NULL     COMMENT '�÷��� ����', -- �÷��� ����
	`PUB`   BOOLEAN      NULL     COMMENT '���������' -- ���������
)
COMMENT '�÷���';

-- �÷���
ALTER TABLE `COLCT`
	ADD CONSTRAINT `PK_COLCT` -- �÷��� �⺻Ű
		PRIMARY KEY (
			`CONO` -- �÷����Ϸù�ȣ
		);

ALTER TABLE `COLCT`
	MODIFY COLUMN `CONO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '�÷����Ϸù�ȣ';

-- �˸�
CREATE TABLE `NOTICE` (
	`NONO`   INTEGER     NOT NULL COMMENT '�˸��ڵ�', -- �˸��ڵ�
	`MNO`    INTEGER     NULL     COMMENT 'ȸ���ڵ�', -- ȸ���ڵ�
	`ZZNO`   INTEGER     NULL     COMMENT '©���� �ڵ�', -- ©���� �ڵ�
	`RNO`    INTEGER     NULL     COMMENT '��� �ڵ�', -- ��� �ڵ�
	`CONO`   INTEGER     NULL     COMMENT '�÷����Ϸù�ȣ', -- �÷����Ϸù�ȣ
	`YNN`    BOOLEAN     NULL     DEFAULT false COMMENT 'Ȯ�ο���', -- Ȯ�ο���
	`NoType` VARCHAR(20) NULL     COMMENT '�˸�����', -- �˸�����
	`DMNO`   INTEGER     NULL     COMMENT '����', -- ����
	`cdt`    DATETIME    NOT NULL COMMENT '��' -- ��
)
COMMENT '�˸�';

-- �˸�
ALTER TABLE `NOTICE`
	ADD CONSTRAINT `PK_NOTICE` -- �˸� �⺻Ű
		PRIMARY KEY (
			`NONO` -- �˸��ڵ�
		);

ALTER TABLE `NOTICE`
	MODIFY COLUMN `NONO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '�˸��ڵ�';

-- QnA
CREATE TABLE `QNA` (
	`QANO` INTEGER    NOT NULL COMMENT '�����ڵ�', -- �����ڵ�
	`QST`  MEDIUMTEXT NOT NULL COMMENT '����', -- ����
	`CDT`  DATETIME   NOT NULL COMMENT '�����', -- �����
	`ANR`  MEDIUMTEXT NOT NULL COMMENT '�亯', -- �亯
	`ADT`  DATETIME   NOT NULL COMMENT '�亯��', -- �亯��
	`MNO`  INTEGER    NOT NULL COMMENT 'ȸ���ڵ�' -- ȸ���ڵ�
)
COMMENT 'QnA';

-- QnA
ALTER TABLE `QNA`
	ADD CONSTRAINT `PK_QNA` -- QnA �⺻Ű
		PRIMARY KEY (
			`QANO` -- �����ڵ�
		);

ALTER TABLE `QNA`
	MODIFY COLUMN `QANO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '�����ڵ�';

-- ©����
ALTER TABLE `ZZAL_LECT`
	ADD CONSTRAINT `FK_CATG_TO_ZZAL_LECT` -- ī�װ� -> ©����
		FOREIGN KEY (
			`CNO` -- ī�װ� �ڵ�
		)
		REFERENCES `CATG` ( -- ī�װ�
			`CNO` -- ī�װ� �ڵ�
		);

-- ©����
ALTER TABLE `ZZAL_LECT`
	ADD CONSTRAINT `FK_MEMB_TO_ZZAL_LECT` -- ȸ�� -> ©����
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- ©����
ALTER TABLE `ZZAL_LECT`
	ADD CONSTRAINT `FK_COLCT_TO_ZZAL_LECT` -- �÷��� -> ©����
		FOREIGN KEY (
			`CONO` -- �÷����Ϸù�ȣ
		)
		REFERENCES `COLCT` ( -- �÷���
			`CONO` -- �÷����Ϸù�ȣ
		);

-- ©���� ������
ALTER TABLE `PAGE`
	ADD CONSTRAINT `FK_ZZAL_LECT_TO_PAGE` -- ©���� -> ©���� ������
		FOREIGN KEY (
			`ZZNO` -- ©���� �ڵ�
		)
		REFERENCES `ZZAL_LECT` ( -- ©����
			`ZZNO` -- ©���� �ڵ�
		);

-- ����
ALTER TABLE `SUBS`
	ADD CONSTRAINT `FK_MEMB_TO_SUBS` -- ȸ�� -> ����
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- ����
ALTER TABLE `SUBS`
	ADD CONSTRAINT `FK_COLCT_TO_SUBS` -- �÷��� -> ����
		FOREIGN KEY (
			`CONO` -- �÷����Ϸù�ȣ
		)
		REFERENCES `COLCT` ( -- �÷���
			`CONO` -- �÷����Ϸù�ȣ
		);

-- ���
ALTER TABLE `REPLY`
	ADD CONSTRAINT `FK_ZZAL_LECT_TO_REPLY` -- ©���� -> ���
		FOREIGN KEY (
			`ZZNO` -- ©���� �ڵ�
		)
		REFERENCES `ZZAL_LECT` ( -- ©����
			`ZZNO` -- ©���� �ڵ�
		);

-- ���
ALTER TABLE `REPLY`
	ADD CONSTRAINT `FK_MEMB_TO_REPLY` -- ȸ�� -> ���
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- favorCatg
ALTER TABLE `FAVOR_CATG`
	ADD CONSTRAINT `FK_MEMB_TO_FAVOR_CATG` -- ȸ�� -> favorCatg
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- favorCatg
ALTER TABLE `FAVOR_CATG`
	ADD CONSTRAINT `FK_CATG_TO_FAVOR_CATG` -- ī�װ� -> favorCatg
		FOREIGN KEY (
			`CNO` -- ī�װ� �ڵ�
		)
		REFERENCES `CATG` ( -- ī�װ�
			`CNO` -- ī�װ� �ڵ�
		);

-- ���ƿ�
ALTER TABLE `LIK`
	ADD CONSTRAINT `FK_MEMB_TO_LIK` -- ȸ�� -> ���ƿ�
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- ���ƿ�
ALTER TABLE `LIK`
	ADD CONSTRAINT `FK_ZZAL_LECT_TO_LIK` -- ©���� -> ���ƿ�
		FOREIGN KEY (
			`ZZNO` -- ©���� �ڵ�
		)
		REFERENCES `ZZAL_LECT` ( -- ©����
			`ZZNO` -- ©���� �ڵ�
		);

-- �÷���
ALTER TABLE `COLCT`
	ADD CONSTRAINT `FK_MEMB_TO_COLCT` -- ȸ�� -> �÷���
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- �˸�
ALTER TABLE `NOTICE`
	ADD CONSTRAINT `FK_ZZAL_LECT_TO_NOTICE` -- ©���� -> �˸�
		FOREIGN KEY (
			`ZZNO` -- ©���� �ڵ�
		)
		REFERENCES `ZZAL_LECT` ( -- ©����
			`ZZNO` -- ©���� �ڵ�
		);

-- �˸�
ALTER TABLE `NOTICE`
	ADD CONSTRAINT `FK_REPLY_TO_NOTICE` -- ��� -> �˸�
		FOREIGN KEY (
			`RNO` -- ��� �ڵ�
		)
		REFERENCES `REPLY` ( -- ���
			`RNO` -- ��� �ڵ�
		);

-- �˸�
ALTER TABLE `NOTICE`
	ADD CONSTRAINT `FK_COLCT_TO_NOTICE` -- �÷��� -> �˸�
		FOREIGN KEY (
			`CONO` -- �÷����Ϸù�ȣ
		)
		REFERENCES `COLCT` ( -- �÷���
			`CONO` -- �÷����Ϸù�ȣ
		);

-- �˸�
ALTER TABLE `NOTICE`
	ADD CONSTRAINT `FK_MEMB_TO_NOTICE` -- ȸ�� -> �˸�
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);

-- QnA
ALTER TABLE `QNA`
	ADD CONSTRAINT `FK_MEMB_TO_QNA` -- ȸ�� -> QnA
		FOREIGN KEY (
			`MNO` -- ȸ���ڵ�
		)
		REFERENCES `MY_SCHEMA`.`MEMB` ( -- ȸ��
			`MNO` -- ȸ���ڵ�
		);