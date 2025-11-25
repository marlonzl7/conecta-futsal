USE conecta_futsal;

INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES
    ('03734270', 'Rua Sargento Rozende', '201', null, 'Vila Rui Barbosa', 'São Paulo', 'SP'),
    ('14870640', 'Praça Doutor Joaquim Nabuco', '1000', null, 'X', 'Jaboticabal', 'SP'),
    ('13323665', 'Rua Serra da Boa Esperança', '200', 'Bloco B', 'Condomínio Monte Belo', 'Salto', 'SP'),
    ('19802130', 'Rua Senhor do Bonfim', '1402', null, 'Vila Xavier', 'Assis', 'SP'),
    ('13180160', 'Rua Santo Hilário', '1402', null, 'Vila San Martin (Nova Veneza)', 'Sumaré', 'SP'),
    ('14065550', 'Rua Luiz Fernandes Netto', '120', null, 'Jardim Joaquim Procópio de Araújo Ferraz', 'Ribeirão Preto', 'SP'),
    ('04139090', 'Rua Acarapé', '1021', null, 'Chácara Inglesa', 'São Paulo', 'SP'),
    ('08642010', 'Rua Um', '1000', null, 'Jardim Três Américas', 'Suzano', 'SP'),
    ('08780210', 'Avenida Cândido Xavier de Almeida e Souza', '110', null, 'Centro Cívico', 'Mogi das Cruzes', 'SP');

INSERT INTO usuario (nome, sobrenome, data_nascimento, telefone, email, senha, id_endereco) VALUES
    ('Marlon', 'Souza', '2000-01-01', '11979842364', 'marlon@email.com', '860cbe569371117d968ef578af52a375:057a0d57bf494e4ad396e90faf0abb65db61c1e6a2392d0cdb38adc1735f96194613bc450e2bb2c5f8e68a799638e9d9b8d30b8e4db11fcf6842eb6042023266', 1),
    ('Ivan', 'Machado', '2000-10-29', '11978012310', 'ivan@email.com', '2af7de0ed20af1174516f2a1c42f1d8b:088e8dfd94c44e573e9f975f6e59988a4a92cf3fc0f713826a9cf623159ea253245d3ac9ec98a9cd6fca64a200c59ad2adae9560238a54b9c084ebeb1cdf3670', 2),
    ('Sergio', 'Rodrigues', '2000-04-19', '11978012301', 'sergio@email.com', '96aa070eab81cb6138d28a1c370a956f:1860f74af7890a99775076c138b4bfa0c7a994801988713fc492d2e3ead75ee18a804f87c9ed668674587f36510847e1e69bf2c893f8ad501023e92a9fff7fa0', 3),
    ('Claudia', 'Sanchez', '2000-02-15', '11972215501', 'claudia@email.com', '08a3b836414ef518bee5c09e895ca8df:4b456735d2d0a07a392c8149bd882a79496fe7f9ba43256159e36ab5b11f771399f74bfafff1e079201c1c7a6672a204ee7506fdfdf8fbebb90e20151e4606e2', 4),
    ('José', 'Silva', '1976-01-20', '11972044761', 'jose@email.com', '2d43653a52d93e862003f7c7c84d4fdf:992ac47fd966bd412ee77ce073c5802dc5b9c45e3d0d8f56328eb8bd47b9275eaa0e5c7257143e57ddf885f027620f0e00a6c55d3644f73f491edbccd41f1dbe', null),
    ('Maria', 'Santos', '1982-07-22', '1199814761', 'maria@email.com', '50de8a303b228a06454edb1c49e03411:5e716fd01f747c70d655303e8d08d13577ecee468f3f2de764c5fe9a2404346be0d7e2e81800d0a4f8f01fb56c75b05f03a848ae8e95f1b7e14c898f39292415', null),
    ('Marcio', 'Minza', '1980-01-29', '1199814761', 'marcio@email.com', 'f5f447f13c67a61e1763ee6e7f659c45:e8dbca40fbc09a3aba1108309d4c4f96242b0b87af946bb209e45ab022789bff64299a66550f14eddaa6784ffc210eb25ebfcfdb9ca37ef35aa67b871b2ea9ee', null),
    ('Ana', 'Azil', '1985-05-12', '1199814761', 'ana@email.com', 'cade50081c4c567f3b38596e8541f131:9d588de5d6b1609a91c862b7e2104390222ee1d18a9dd084eac5c3db4beb26f28f570c4324ea86023effe8a8615b3fb644f58cc91948546cf74b1d2c631047f8', null);

INSERT INTO jogador (posicao, id_usuario) VALUES
    ('ALA', 1),
    ('FIXO', 2),
    ('PIVO', 3),
    ('FIXO', 4);

INSERT INTO tecnico (id_usuario) VALUES
    (5),
    (6),
    (7),
    (8);

INSERT INTO time (nome, descricao, id_tecnico, id_endereco) VALUES
    ('Vila Nova', 'Time de vila que disputa a várzea', 1, 7),
    ('Travessa Futsal', 'Time que disputa o campeonato paulista série Prata', 2, 6),
    ('Vila Santista', 'Time que disputa o campeonato paulista série Ouro', 3, 9),
    ('Esporte Clube União Suzano', 'Time que disputa o campeonato paulista série Ouro', 4, 8);

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
    ('Travessa Futsal - SUB-20', 'Peneira para o Travessa e disputar o campeonato paulista Série Prata', '2025-11-16', '2025-11-30', '2025-12-04', 2, 6, 16),
    ('Travessa Futsal - Master', 'Peneira para o Travessa e disputar o campeonato paulista Série Prata', '2025-11-16', '2025-11-30', '2025-12-04', 2, 6, 16),
    ('Vila Santista Futsal - SUB-8', 'Peneira para o Vila Santista disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 4),
    ('Vila Santista Futsal - SUB-10', 'Peneira para o Vila Santista disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 6),
    ('Vila Santista Futsal - SUB-12', 'Peneira para o Vila Santista disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-18', 3, 9, 8),
    ('E.C.U.S - SUB-10', 'Peneira para o E.C.U.S disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 6),
    ('E.C.U.S - SUB-12', 'Peneira para o E.C.U.S disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 8),
    ('E.C.U.S - SUB-14', 'Peneira para o E.C.U.S disputar o campeonato paulista série ouro', '2025-01-03', '2025-01-15', '2025-02-15', 4, 8, 10);

INSERT INTO inscricao (id_peneira, id_jogador) VALUES
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),
    (4, 4),
    (6, 4),
    (1, 1);