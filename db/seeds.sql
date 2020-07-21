-- 3. Still in the `db` folder, create a `seeds.sql` file. 
-- In this file, write insert queries to 
-- populate the `burgers` table with at least three entries.

INSERT INTO burgers (burger_name, devoured) VALUES ('cheese burger', DEFAULT);
INSERT INTO burgers (burger_name, devoured) VALUES ('plant burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('bison burger', true);