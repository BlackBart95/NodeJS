drop database onlineGame ;
CREATE DATABASE onlineGame;
use onlineGame;
create table PLAYER(
    iIdPlayer INT PRIMARY KEY auto_increment,
    Name VARCHAR(50),
    FirstName VARCHAR(30),
    Birthday DATE,
    SEX INT,
    Login VARCHAR(30),
    Password TEXT,
    States INT
);