CREATE DATABASE conecta_futsal;

USE conecta_futsal;

CREATE TABLE endereco (
	id_endereco INT PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(8) NOT NULL,
	logradouro VARCHAR(100) NOT NULL,
	numero VARCHAR(9) NOT NULL,
	complemento VARCHAR(45),
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	uf CHAR(2) NOT NULL
);

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	sobrenome VARCHAR(150) NOT NULL,
	data_nascimento DATE NOT NULL,
	telefone VARCHAR(11),
	email VARCHAR(150) NOT NULL UNIQUE,
	senha VARCHAR(255) NOT NULL,
	id_endereco INT UNIQUE,

	CONSTRAINT fk_usuario_endereco FOREIGN KEY (id_endereco) REFERENCES endereco (id_endereco)
);

CREATE TABLE jogador (
	id_jogador INT PRIMARY KEY AUTO_INCREMENT,
	posicao VARCHAR(45),
	descricao VARCHAR(255),
	id_usuario INT NOT NULL UNIQUE,

	CONSTRAINT chkPosicao CHECK(posicao IN ('FIXO', 'ALA', 'PIVO')),
	CONSTRAINT fk_jogador_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE tecnico (
	id_tecnico INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(255),
	id_usuario INT NOT NULL UNIQUE,

	CONSTRAINT fk_tecnico_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE time (
	id_time INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL UNIQUE,
	descricao VARCHAR(255),
	id_tecnico INT NOT NULL UNIQUE,
	id_endereco INT NOT NULL,

	CONSTRAINT fk_time_tecnico FOREIGN KEY (id_tecnico) REFERENCES tecnico (id_tecnico),
	CONSTRAINT fk_time_endereco FOREIGN KEY (id_endereco) REFERENCES endereco (id_endereco)
);

CREATE TABLE categoria_base (
	id_categoria_base INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(12) NOT NULL UNIQUE
);

CREATE TABLE peneira (
	id_peneira INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100) NOT NULL,
	descricao VARCHAR(255) NOT NULL,
	status BOOLEAN DEFAULT TRUE,
	data_inicio_inscricao DATE NOT NULL,
	data_final_inscricao DATE NOT NULL,
	data_hora_realizacao DATETIME NOT NULL,
	id_time INT NOT NULL,
	id_endereco INT NOT NULL,
	id_categoria_base INT NOT NULL,

	CONSTRAINT fk_peneira_time FOREIGN KEY (id_time) REFERENCES time (id_time),
	CONSTRAINT fk_peneira_endereco FOREIGN KEY (id_endereco) REFERENCES endereco (id_endereco),
	CONSTRAINT fk_peneira_categoria_base FOREIGN KEY (id_categoria_base) REFERENCES categoria_base (id_categoria_base)
);

CREATE TABLE inscricao (
	id_peneira INT,
	id_jogador INT,
	data_hora_inscricao DATETIME DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT pk_inscricao_peneira_jogador PRIMARY KEY (id_peneira, id_jogador),

	CONSTRAINT fk_inscricao_jogador FOREIGN KEY (id_jogador) REFERENCES jogador (id_jogador),
	CONSTRAINT fk_inscricao_peneira FOREIGN KEY (id_peneira) REFERENCES peneira (id_peneira)
);

CREATE VIEW vw_peneiras_detalhadas AS
    SELECT 
        p.id_peneira,
        t.nome AS time,
        c.nome AS categoria_de_base,
        CONCAT(e.logradouro, ', ', e.numero, ' - ', e.cidade, ' ', e.uf) AS local,
        YEAR(p.data_hora_realizacao) AS ano,
        MONTH(p.data_hora_realizacao) AS mes,
        DAY(p.data_hora_realizacao) AS dia,
        TIME(p.data_hora_realizacao) AS horario
    FROM peneira p 
    JOIN endereco e ON p.id_endereco = e.id_endereco 
    JOIN time t ON p.id_time = t.id_time
    JOIN categoria_base c ON p.id_categoria_base = c.id_categoria_base;

CREATE VIEW vw_peneiras_por_cidade AS
    SELECT
        CONCAT(e.cidade, ' - ', e.uf) AS cidade,
        COUNT(*) AS quantidade
    FROM peneira p
    JOIN endereco e ON p.id_endereco = e.id_endereco
    GROUP BY
        e.cidade,
        e.uf;

CREATE VIEW vw_peneiras_por_estado AS
    SELECT
        e.uf,
		p.data_hora_realizacao AS data,
        COUNT(*) AS quantidade
    FROM peneira p
    JOIN endereco e ON p.id_endereco = e.id_endereco
    GROUP BY
        e.uf, p.data_hora_realizacao;
