create database T_Medico

use T_Medico

create table Doutor
(
	IdMedico int primary key identity
	,Nome varchar (255) not null
	,DataDeNascimento date not null
	,crm varchar (255) not null unique
	,especialidade varchar (250)not null
);

insert into Doutor(Nome, DataDeNascimento,especialidade, crm)
values ('Arthur', '10/02/2003', 'Cardiologista','11')
       ,('Laura', '19/06/2002', 'Ortopedista','22' )
	   ,('Marina', '05/06/1980', 'Pediatria','33');

	   select *from Doutor;

	    drop table Doutor

