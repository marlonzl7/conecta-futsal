USE conecta_futsal;

INSERT INTO endereco (id_endereco, cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES
    (1, '03734270', 'Rua Sargento Rozende', '201', null, 'Vila Rui Barbosa', 'São Paulo', 'SP'),
    (2, '14870640', 'Praça Doutor Joaquim Nabuco', '1000', null, 'Centro', 'Jaboticabal', 'SP'),
    (3, '13323665', 'Rua Serra da Boa Esperança', '200', 'Bloco B', 'Condomínio Monte Belo', 'Salto', 'SP'),
    (4, '19802130', 'Rua Senhor do Bonfim', '1402', null, 'Vila Xavier', 'Assis', 'SP'),
    (5, '13180160', 'Rua Santo Hilário', '1402', null, 'Vila San Martin', 'Sumaré', 'SP'),
    (6, '14065550', 'Rua Luiz Fernandes Netto', '120', null, 'Jd. Procópio de Araújo Ferraz', 'Ribeirão Preto', 'SP'),
    (7, '04139090', 'Rua Acarapé', '1021', null, 'Chácara Inglesa', 'São Paulo', 'SP'),
    (8, '08642010', 'Rua Um', '1000', null, 'Jardim Três Américas', 'Suzano', 'SP'),
    (9, '08780210', 'Av. Cândido Xavier de Almeida e Souza', '110', null, 'Centro Cívico', 'Mogi das Cruzes', 'SP'),
    (10, '11013010', 'Rua Princesa Isabel', '77', null, 'Vila Belmiro', 'Santos', 'SP'),
    (11, '03047000', 'Rua São Jorge', '100', null, 'Tatuapé', 'São Paulo', 'SP'),
    (12, '08215000', 'Rua Itaquera', '321', null, 'Itaquera', 'São Paulo', 'SP');

INSERT INTO usuario (id_usuario, nome, sobrenome, data_nascimento, telefone, email, senha, id_endereco) VALUES
    (1, 'Marlon', 'Souza', '2000-01-01', '11979842364', 'marlon@email.com', '860cbe569371117d968ef578af52a375:057a0d57bf494e4ad396e90faf0abb65db61c1e6a2392d0cdb38adc1735f96194613bc450e2bb2c5f8e68a799638e9d9b8d30b8e4db11fcf6842eb6042023266', 6),
    (2, 'Ivan', 'Machado', '2000-10-29', '11978012310', 'ivan@email.com', '2af7de0ed20af1174516f2a1c42f1d8b:088e8dfd94c44e573e9f975f6e59988a4a92cf3fc0f713826a9cf623159ea253245d3ac9ec98a9cd6fca64a200c59ad2adae9560238a54b9c084ebeb1cdf3670', 8),
    (3, 'Sergio', 'Rodrigues', '2000-04-19', '11978012301', 'sergio@email.com', '96aa070eab81cb6138d28a1c370a956f:1860f74af7890a99775076c138b4bfa0c7a994801988713fc492d2e3ead75ee18a804f87c9ed668674587f36510847e1e69bf2c893f8ad501023e92a9fff7fa0', 9),
    (4, 'Claudia', 'Sanchez', '2000-02-15', '11972215501', 'claudia@email.com', '08a3b836414ef518bee5c09e895ca8df:4b456735d2d0a07a392c8149bd882a79496fe7f9ba43256159e36ab5b11f771399f74bfafff1e079201c1c7a6672a204ee7506fdfdf8fbebb90e20151e4606e2', 4),
    (5, 'José', 'Silva', '1976-01-20', '11972044761', 'jose@email.com', '2d43653a52d93e862003f7c7c84d4fdf:992ac47fd966bd412ee77ce073c5802dc5b9c45e3d0d8f56328eb8bd47b9275eaa0e5c7257143e57ddf885f027620f0e00a6c55d3644f73f491edbccd41f1dbe', 10),
    (6, 'Maria', 'Santos', '1982-07-22', '1199814761', 'maria@email.com', '50de8a303b228a06454edb1c49e03411:5e716fd01f747c70d655303e8d08d13577ecee468f3f2de764c5fe9a2404346be0d7e2e81800d0a4f8f01fb56c75b05f03a848ae8e95f1b7e14c898f39292415', 11),
    (7, 'Marcio', 'Minza', '1980-01-29', '1199814761', 'marcio@email.com', 'f5f447f13c67a61e1763ee6e7f659c45:e8dbca40fbc09a3aba1108309d4c4f96242b0b87af946bb209e45ab022789bff64299a66550f14eddaa6784ffc210eb25ebfcfdb9ca37ef35aa67b871b2ea9ee', 12),
    (8, 'Ana', 'Azil', '1985-05-12', '1199814761', 'ana@email.com', 'cade50081c4c567f3b38596e8541f131:9d588de5d6b1609a91c862b7e2104390222ee1d18a9dd084eac5c3db4beb26f28f570c4324ea86023effe8a8615b3fb644f58cc91948546cf74b1d2c631047f8', 7);

INSERT INTO jogador (id_jogador, posicao, id_usuario) VALUES
    (1, 'ALA', 1),
    (2, 'FIXO', 2),
    (3, 'PIVO', 3),
    (4, 'FIXO', 4);

INSERT INTO tecnico (id_tecnico, id_usuario) VALUES
    (1, 5),
    (2, 6),
    (3, 7),
    (4, 8);

INSERT INTO time (id_time, nome, descricao, id_tecnico, id_endereco) VALUES
    (1, 'Vila Nova', 'Time de vila da várzea', 1, 7),
    (2, 'Travessa Futsal', 'Disputa o Paulista Série Prata', 2, 6),
    (3, 'Vila Santista', 'Disputa o Paulista Série Ouro', 3, 9),
    (4, 'Esporte Clube União Suzano', 'Disputa o Paulista Série Ouro', 4, 8),
    (5, 'Santos Futsal', 'Base oficial do Santos FC', 1, 10),
    (6, 'Corinthians Futsal', 'Base oficial Corinthians', 2, 12),
    (7, 'São Paulo FC Futsal', 'Base oficial SPFC', 3, 11);

INSERT INTO categoria_base (id_categoria_base, nome) VALUES
    (1,'SUB-5'), (2,'SUB-6'), (3,'SUB-7'), (4,'SUB-8'), (5,'SUB-9'),
    (6,'SUB-10'), (7,'SUB-11'), (8,'SUB-12'), (9,'SUB-13'), (10,'SUB-14'),
    (11,'SUB-15'), (12,'SUB-16'), (13,'SUB-17'), (14,'SUB-18'), (15,'SUB-19'),
    (16,'SUB-20'), (17,'Profissional'), (18,'Master');

INSERT INTO peneira (id_peneira, titulo, descricao, data_inicio_inscricao, data_final_inscricao, data_hora_realizacao, id_time, id_endereco, id_categoria_base) VALUES
    (1, 'Travessa - SUB-20', 'Peneira Série Prata', '2025-11-16', '2025-11-30', '2025-12-04', 2, 6, 16),
    (2, 'Travessa - Master', 'Peneira Série Prata', '2025-11-16', '2025-11-30', '2025-12-04', 2, 6, 18),
    (3, 'Vila Santista - SUB-8', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 4),
    (4, 'Vila Santista - SUB-10', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 6),
    (5, 'Vila Santista - SUB-12', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 8),
    (6, 'E.C.U.S - SUB-10', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 6),
    (7, 'E.C.U.S - SUB-12', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 8),
    (8, 'E.C.U.S - SUB-14', 'Peneira Série Ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 10),
    (9, 'Santos - SUB-11', 'Base do Santos', '2025-02-01', '2025-02-20', '2025-03-01', 5, 10, 7),
    (10, 'Santos - SUB-15', 'Base do Santos', '2025-02-01', '2025-02-20', '2025-03-01', 5, 10, 11),
    (11, 'Corinthians - SUB-13', 'Base Corinthians', '2025-03-01', '2025-03-20', '2025-03-25', 6, 12, 9),
    (12, 'São Paulo FC - SUB-17', 'Base SPFC', '2025-03-01', '2025-03-20', '2025-03-25', 7, 11, 13);

INSERT INTO inscricao (id_peneira, id_jogador) VALUES
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (4, 4),
    (6, 4),
    (1, 1),
    (9, 1),
    (11, 2),
    (12, 3);
