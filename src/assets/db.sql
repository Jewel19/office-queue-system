CREATE TABLE publicuser(
    userid int(10) PRIMARY KEY AUTOINCREMENT NOT NULL,
    fname varchar(50) NOT NULL,
    lname varhar(50) NOT NULL,
    gender boolean(9) NOT NULL,
    email varchar(50) NOT NULL,
    login varchar(50)  NOT NULL,
    password varchar(100) NOT NULL,
)

CREATE TABLE officeacount(
    officeid int(10) PRIMARY KEY AUTOINCREMENT NOT NULL,
    officename varchar(100)NOT NULL,
    offwndw int(2) NOT NULL,
    offcpswrd varchar(100) NOT NULL,
    offclogin varchar(100) NOT NULL,
)

CREATE TABLE organisatiion(
    orgid int(10) PRIMARY KEY AUTOINCREMENT NOT NULL,
    orgname varchar(200) NOT NULL,
    orgloc varchar(1000) NOT NULL,
    ofccnt int(5) NOT NULL
)

CREATE TABLE queues(
    queueid int(10) PRIMARY KEY AUTOINCREMENT NOT NULL,
    userid int(10) FOREIGN KEY NOT NULL,

)

