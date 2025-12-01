USE conecta_futsal;

INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES
    ('03734270', 'Rua Sargento Rozende', '201', null, 'Vila Rui Barbosa', 'São Paulo', 'SP'),
    ('14870640', 'Praça Doutor Joaquim Nabuco', '1000', null, 'Centro', 'Jaboticabal', 'SP'),
    ('13323665', 'Rua Serra da Boa Esperança', '200', 'Bloco B', 'Monte Belo', 'Salto', 'SP'),
    ('19802130', 'Rua Senhor do Bonfim', '1402', null, 'Vila Xavier', 'Assis', 'SP'),
    ('13180160', 'Rua Santo Hilário', '1402', null, 'Vila San Martin', 'Sumaré', 'SP'),
    ('14065550', 'Rua Luiz Fernandes Netto', '120', null, 'Procópio Ferraz', 'Ribeirão Preto', 'SP'),
    ('04139090', 'Rua Acarapé', '1021', null, 'Chácara Inglesa', 'São Paulo', 'SP'),
    ('08642010', 'Rua Um', '1000', null, 'Jardim Três Américas', 'Suzano', 'SP'),
    ('08780210', 'Av. Cândido Xavier', '110', null, 'Centro Cívico', 'Mogi das Cruzes', 'SP'),
    ('11013010', 'Rua Princesa Isabel', '77', null, 'Vila Belmiro', 'Santos', 'SP'),
    ('03047000', 'Rua São Jorge', '100', null, 'Tatuapé', 'São Paulo', 'SP'),
    ('08215000', 'Rua Itaquera', '321', null, 'Itaquera', 'São Paulo', 'SP'),
    ('06608000', 'Av. Presidente Kennedy', '500', null, 'Centro', 'Barueri', 'SP'),
    ('04854440', 'Rua Luar do Sertão', '200', null, 'Parelheiros', 'São Paulo', 'SP'),
    ('17512000', 'Rua Paraná', '155', null, 'Centro', 'Marília', 'SP');

INSERT INTO usuario (nome, sobrenome, data_nascimento, telefone, email, senha, id_endereco) VALUES
    ('Marlon', 'Souza', '2000-01-01', '11979842364', 'marlon@email.com', '381bc005d3a4f94c4a817990ff01caf1:0151faeee632126434e72ed3267e46a3cb9e6d71eba9e53a9034a0f7532806ddaabf003af88e02f539de975159bead575f3eec33374a626d47a1b5df7416f011', 6),
    ('Ivan', 'Machado', '2000-10-29', '11978012310', 'ivan@email.com', 'hasfc104b752eeeb128853c502d4d86bc1d:5f6aeb1ad15ad0878da5987f0d423469d2aaec7d559e373e0f2c2b643265a9b9ffdd8d547f0dce6ea499d449e34163d7aba8bfce7ac7acc08f458f9fe5b4536bh', 8),
    ('Sergio', 'Rodrigues', '2000-04-19', '11978012301', 'sergio@email.com', 'af5ae8096687467b18b47c838d8e3c5c:b96a82d78a83e27b52f5d4cbef866ca02d8fe10c0abd72754b37740b667a20df27a0e1561422f609758545825e92e8a53533b421275191b3f0f86534fbe9b44c', 9),
    ('Claudia', 'Sanchez', '2000-02-15', '11972215501', 'claudia@email.com', 'f5876bbf54e5e68d2a2e450847db9849:f420f534d8c730f8f2f3162d4dc3f6806a0986f168a999f28dd2d9dbc6ada8a5460aeadf0543a9b143dae5192a6c60a6f63774974f089b13569c7a1560c7ac07', 4),
    ('José', 'Silva', '1976-01-20', '11972044761', 'jose@email.com', 'f5905adc01f1f1ef0ada09a25f49d341:fe7bf93975c1b742f34ac48e1a7ef75e69cfa170914891af0f327b76556b398b96901cbc8854d48ef64416b6f53300c7b6957b3b3e37ad465e6818ce66a49a05', 10),
    ('Maria', 'Santos', '1982-07-22', '1199814761', 'maria@email.com', '63ce684245692f9dfd19e02b24b56f1c:beca606ae670eded1c3d5f01e65295dee96bd78d654bc85fba09e61b93b521869cdca74f04b226ad1e93bc58aba10ff8c923656f64bc9767061f40e0b0f31876', 11),
    ('Marcio', 'Minza', '1980-01-29', '1199814761', 'marcio@email.com', 'b93ee1774eee1983d4bf0f93e5aafe28:8f47919883e0b03ecc33be09916c5e1af8c1a5032df85ff62c3d79bad62ffb4eae1f9779dcac8758c4ecbbaabfee29b1fb1f575408c68a90ca67b4e4e77dd79e', 12),
    ('Ana', 'Azil', '1985-05-12', '1199814761', 'ana@email.com', 'afb04217f88c7e2edbe36f5fce24819c:61d502a2b8c596db8bb65a6ad583bc237010e40f6d62ac019353ab0f108b0ea9c3f574567e4d97ee8b032b45af8c6c08a21ca9986366c1c8f56016815957649c', 7),
    ('Pedro', 'Ferreira', '1999-05-12', '11977778888', 'pedro@email.com', 'e341a2ee8ba2601b7fdd211b8baa8175:20d258d960d6912124eb4fb970bb39de993c5b06777bae54f4ca816ca2f30a428af6cebb42e0731d60e2d2c32aa162da0a755e38ccbbaddad357de9268b75223', 13),
    ('João', 'Macedo', '1995-03-22', '11999998888', 'joao@email.com', '378e88140268d0ffa7ec539efdeaefe3:c7253566afa41151ed9e937752ebe01b409429d0c7b68eae350ad1a1c99aa78cf0fcaf46e7408cfc7182af3553b6c9cdd8c98cf20cc9134b31045a08d67dd872', 14),
    ('Lucas', 'Pereira', '1990-09-11', '11955554444', 'lucas@email.com', 'c0f2047391a9d18d801210cde390df22:4c37b8ceade68c3f4b7fd4b692e9285b486b09a7c9ec0ab86a35a5a63571b5ea239ebd6df8d4c7990f46b67c2758925c4e3c527f5c6c18442b4969418f2d05f0', 15);

INSERT INTO jogador (posicao, id_usuario, descricao) VALUES
    ('ALA', 1, 'Armador e driblador'),
    ('ALA', 2, 'Marcador e passador'),
    ('PIVO', 3, 'Chute forte e Finalizador'),
    ('FIXO', 4, 'Marcador'),
    ('ALA', 9, 'Rápido e driblador'),
    ('PIVO', 10, 'Finalizador'),
    ('FIXO', 11, 'Chute forte e marcador');

INSERT INTO tecnico (id_usuario, descricao) VALUES
    (5, 'Experiente'),
    (6, 'Treinadora da base'),
    (7, 'Técnico profissional'),
    (8, 'Especialista em categorias de base'),
    (9, 'Categoria sub-20'),
    (10, 'Categoria profissional'),
    (11, 'Categoria sub-15');

INSERT INTO time (nome, descricao, id_tecnico, id_endereco) VALUES
    ('Vila Nova', 'Time de várzea', 1, 7),
    ('Travessa Futsal', 'Paulista Série Prata', 2, 6),
    ('Vila Santista', 'Paulista Série Ouro', 3, 9),
    ('E.C.U.S', 'Paulista Série Ouro', 4, 8),
    ('Barueri Futsal', 'Categoria de base', 5, 13),           
    ('Marília Futsal', 'Categoria de base', 6, 15),    
    ('Vila Velha', 'Categoria de base', 7, 14);         

INSERT INTO categoria_base (nome) VALUES 
    ('SUB-5'), 
    ('SUB-6'), 
    ('SUB-7'), 
    ('SUB-8'), 
    ('SUB-9'), 
    ('SUB-10'), 
    ('SUB-11'), 
    ('SUB-12'), 
    ('SUB-13'), 
    ('SUB-14'),
    ('SUB-15'), 
    ('SUB-16'), 
    ('SUB-17'), 
    ('SUB-18'), 
    ('SUB-19'), 
    ('SUB-20'), 
    ('Profissional'), 
    ('Master');

INSERT INTO peneira (titulo, descricao, data_inicio_inscricao, data_final_inscricao, data_hora_realizacao, id_time, id_endereco, id_categoria_base) VALUES
    ('Travessa - SUB-20', 'Peneira para disputar o Campeonato Paulista Série Prata', '2025-11-16', '2025-11-30', '2025-12-04 10:00', 2, 6, 16),
    ('Travessa - Master', 'Peneira para disputar o Campeonato Paulista Série Prata', '2025-11-16', '2025-11-30', '2025-12-04 14:00', 2, 6, 18),
    ('Vila Santista - SUB-8', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-18 08:00', 3, 9, 4),
    ('Vila Santista - SUB-10', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-18 10:00', 3, 9, 6),
    ('Vila Santista - SUB-12', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-18 14:00', 3, 9, 8),
    ('E.C.U.S - SUB-10', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-15 08:00', 4, 8, 6),
    ('E.C.U.S - SUB-12', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-15 10:00', 4, 8, 8),
    ('E.C.U.S - SUB-14', 'Peneira para disputar o Campeonato Paulista Ouro', '2025-01-03', '2025-01-15', '2025-02-15 14:00', 4, 8, 10),
    ('Barueri - SUB-11', 'Peneira para disputar o Campeonato Regional', '2025-02-01', '2025-02-20', '2025-03-01 09:00', 5, 13, 7),
    ('Marília - SUB-15', 'Peneira para disputar o Campeonato Regional', '2025-02-01', '2025-02-20', '2025-03-01 15:00', 6, 15, 11),
    ('Vila Velha - SUB-20', 'Peneira para disputar o Campeonato Regional', '2025-03-01', '2025-03-20', '2025-03-25 10:00', 7, 14, 16);

INSERT INTO inscricao (id_peneira, id_jogador) VALUES
    (1, 1),
    (1, 5),
    (2, 2),
    (2, 3),
    (3, 4),
    (4, 6),
    (5, 7),
    (9, 1),
    (10, 6),
    (11, 5);
