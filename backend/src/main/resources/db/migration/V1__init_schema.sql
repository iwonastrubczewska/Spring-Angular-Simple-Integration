CREATE TABLE employee (id  bigserial not null, name varchar(255),  surname varchar(255),  email varchar(255), primary key (id));
CREATE TABLE task (id  bigserial not null, to_do varchar(255), deadline timestamp , employee_id bigint not null, primary key (id));
ALTER TABLE task DROP CONSTRAINT IF EXISTS employee_fk;
ALTER TABLE task ADD CONSTRAINT employee_fk foreign key (employee_id) references employee;

INSERT INTO public.employee(name,surname,email) values ('Anna','Kowalska','anna.kowalska@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Jan','Kowalski','jan.kowalska@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Adam','Nowak','adam.nowak@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Joanna','Nowak','joanna.nowak@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Piotr','Kowalski','piotr.kowalski@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Paweł','Nowak','pawel.nowak@gmail.com');
INSERT INTO public.employee(name,surname,email) values ('Anna','Nowak','anna.nowak@gmail.com');

INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 1', '12.08.2018T07:00:00', 1);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 2', '15.08.2018T07:00:00', 1);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 3', '07.12.2018T07:00:00', 2);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 4', '20.08.2018T07:00:00', 2);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 5', '07.10.2018T07:00:00', 3);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 6', '25.09.2018T07:00:00', 4);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 7', '07.08.2018T07:00:00', 5);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 8', '16.03.2019T07:00:00', 5);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 9', '08.05.2019T07:00:00', 6);
INSERT INTO public.task(to_do, deadline, employee_id) values ('projekt nr 10', '10.06.2019T07:00:00', 7);


create table application_user (id  bigserial not null, password varchar(255), username varchar(255), primary key (id));
alter table application_user add constraint UK_castjbvpeeus0r8lbpehiu0e4 unique (username)
