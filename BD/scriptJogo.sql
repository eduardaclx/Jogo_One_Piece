CREATE DATABASE jogoOnePiece;
USE jogoOnePiece;

CREATE TABLE Jogador(
idJogador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
telefoneCelular CHAR(11) NOT NULL,
senha VARBINARY(100) NOT NULL
);

CREATE TABLE Fase (
idFase INT PRIMARY KEY AUTO_INCREMENT,
xpMax INT NOT NULL,
xpMin INT NOT NULL
);

CREATE TABLE Partida (
idPartida INT AUTO_INCREMENT,
fkJogador INT,
FOREIGN KEY (fkJogador) REFERENCES Jogador(idJogador),
fkFase INT,
FOREIGN KEY (fkFase) REFERENCES Fase(idFase),
PRIMARY KEY (idPartida, fkJogador, fkFase),
xpGanho INT NOT NULL,
tempo TIME NOT NULL
);

INSERT INTO Jogador VALUES (
null, 'Eduarda', 'eduarda@sptech.school','12345678911', md5('senhaOnePiece')
);

INSERT INTO Fase VALUES 
(NULL, 600, 70),
(NULL, 600, 120),
(NULL, 1200, 450)
;

SELECT * FROM Jogador;
SELECT * FROM Jogador JOIN Partida ON fkJogador = idJogador JOIN Fase ON fkFase = idFase;
SELECT SUM(xpGanho) FROM Partida GROUP BY fKJogador;
