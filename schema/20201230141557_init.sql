-- migrate:up
create table users (
  id serial primary key,
  name text not null,
  age int not null
);
-- migrate:down
drop table users;