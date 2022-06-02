create database senha;
use senha;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(60),
senha varbinary(100)
);

insert into usuario values (null, 'Paulo', 'paulo@sptech.school', md5('senhaSegura'));
insert into usuario values (null, 'Vivian', 'Vivian@sptech.school', aes_decrypt('senhaSegura', 'chaveSecreta'));

-- essa chave é uma variavel de ambiente, super secreta, mesmo para os desenvolvedores
-- uma variavel de ambiente é como produção e desenvolvimento na api da acquatec

select * from usuario where email ='paulo@sptech.school' and senha = md5('senhaSegura');
select * from usuario;

select nome, aes_decrypt(senha, 'chaveSecreta') from usuario where id=5; 

select aes_encrypt('senhaSegura', 'chavefodas');

select @@autocommit;
-- 1 significa que está ligado, então não insere dados incorretos, já o 0 ele tenta inserir até dados incorretos
set @@autocommit = 1;

-- bloco que vai executar em lote, tudo de uma vez, é como um ambiente de teste, com excessão de drop e truncate
start transaction;
delete from usuario where id > 0;

select * from usuario;

rollback;
-- esse é o crtl z do workbanch

