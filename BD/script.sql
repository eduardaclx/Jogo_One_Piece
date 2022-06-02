-- TABELAS NO SQL WORKBENCH

CREATE DATABASE OneShop;

USE OneShop;

CREATE TABLE Endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
CEP CHAR (8) UNIQUE NOT NULL,
UF CHAR(2) NOT NULL,
Cidade VARCHAR(25) NOT NULL,
Bairro VARCHAR(30) NOT NULL,
Rua VARCHAR(45) NOT NULL,
Numero INT NOT NULL,
Complemento VARCHAR(30) NOT NULL
);

CREATE TABLE Cliente(
idCliente INT PRIMARY KEY AUTO_INCREMENT,
nomeCliente VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
telefoneCelular CHAR(11) NOT NULL,
senha VARCHAR(20) NOT NULL
);

CREATE TABLE Compra (
idCompra INT AUTO_INCREMENT,
fkCliente INT,
FOREIGN KEY (fkCliente) REFERENCES Cliente(idCliente),
dtCompra DATE NOT NULL,
PRIMARY KEY (idCompra, fkCliente)
);

CREATE TABLE Produto (
idProduto INT PRIMARY KEY AUTO_INCREMENT,
nomeProduto VARCHAR(45) NOT NULL,
categoria VARCHAR(25) NOT NULL,
preco DECIMAL NOT NULL
);

INSERT INTO Produto VALUES
(null, "Figure Action Luffy", "Figure Action", 220.0),
(null, "Figure Action Sabo", "Figure Action", 170.0),
(null, "Figure Action Ace", "Figure Action", 180.0);

CREATE TABLE Carrinho (
idCarrinho INT AUTO_INCREMENT,
fkCliente INT,
FOREIGN KEY (fkCliente) REFERENCES Cliente(idCliente),
fkCompra INT,
FOREIGN KEY (fkCompra) REFERENCES Compra(idCompra),
fkProduto INT,
FOREIGN KEY (fkProduto) REFERENCES Produto(idProduto),
qntProduto INT NOT NULL,
PRIMARY KEY (idCarrinho, fkCompra, fkProduto)
);

select * from Produto;
select * from cliente;