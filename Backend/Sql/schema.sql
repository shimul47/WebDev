USE delta_app;
SHOW TABLES;
SELECT * from user;
create table user(
    id VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(60) not null
);
SELECT * from user;
select * from user where email="abc@gmai.com";