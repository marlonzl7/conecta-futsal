USE conecta_futsal;

INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES
    ('03734270', 'Rua Sargento Rozende', '201', null, 'Vila Rui Barbosa', 'São Paulo', 'SP'),
    ('14870640', 'Praça Doutor Joaquim Nabuco', '1000', null, 'X', 'Jaboticabal', 'SP'),
    ('13323665', 'Rua Serra da Boa Esperança', '200', 'Bloco B', 'Condomínio Monte Belo', 'Salto', 'SP'),
    ('19802130', 'Rua Senhor do Bonfim', '1402', null, 'Vila Xavier', 'Assis', 'SP'),
    ('13180160', 'Rua Santo Hilário', '1402', null, 'Vila San Martin (Nova Veneza)', 'Sumaré', 'SP'),
    ('14065550', 'Rua Luiz Fernandes Netto', '120', null, 'Jardim Joaquim Procópio de Araújo Ferraz', 'Ribeirão Preto', 'SP'),
    ('04139090', 'Rua Acarapé', '1021', null, 'Chácara Inglesa', 'São Paulo', 'SP');

INSERT INTO usuario (nome, sobrenome, data_nascimento, telefone, email, senha, id_endereco) VALUES
    ('Marlon', 'Souza', '2000-01-01', '11979842364', 'marlon@email.com', 'Senha123_', 1),
    ('Rafael', 'Souza', '2000-10-29', '11978012310', 'rafael@email.com', 'Senha123_', 2),
    ('Otavio', 'Rodrigues', '2000-04-19', '11978012301', 'otavio@email.com', 'Senha123_', 3),
    ('Juan', 'Sanchez', '2000-02-15', '11972215501', 'juan@email.com', 'Senha123_', 4),
    ('José', 'Silva', '1976-01-20', '11972044761', 'jose@email.com', 'Senha123_', null),
    ('Maria', 'Santos', '1982-07-22', '1199814761', 'maria@email.com', 'Senha123_', null);

INSERT INTO jogador (posicao, descricao, id_usuario) VALUES
    ('ALA', 1),
    ('FIXO', 2),
    ('PIVO', 3),
    ('FIXO', 4);

INSERT INTO tecnico (id_usuario) VALUES
    (4),
    (5);

INSERT INTO time (nome, descricao, id_tecnico, id_endereco) VALUES
    ('Vila Nova', 'Time de vila que disputa a várzea', 1, 7),
    ('Travessa Futsal', 'Time que disputa o campeonato paulista série Prata', 2, 6);

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

INSERT INTO peneira (titulo, descricao, data_inicio_inscricao, data_final_inscricao, data_hora_inscricao, id_time, id_endereco, id_categoria_base) VALUES
    ('Peneira: Travessa Futsal - SUB-20', 'Peneira para o Travessa e disputar o campeonato paulista Série Prata', '2025-11-16', '2025-11-30', '2025-12-04', 2, 6, 16),
    ('Peneira: Vila Nova Futsal - SUB-20', 'Peneira para o Vila Nova e disputar campeonatos da Várzea', '2025-11-01', '2025-11-30', '2025-12-08', 7, 18);

INSERT INTO inscricao (id_peneira, id_jogador) VALUES
    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4);