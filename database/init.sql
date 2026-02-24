create database if not exists login_system;
use login_system;

create table if not exists users(
	id int auto_increment primary key,
    email varchar(255) not null unique,
    password varchar(255) not null,
    create_at timestamp default current_timestamp
);

show tables;

select * from users;