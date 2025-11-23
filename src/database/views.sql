USE conecta_futsal;

CREATE VIEW vw_listar_peneiras AS
    SELECT 
        p.id_peneira,
        t.nome AS time,
        c.nome AS categoria_de_base,
        CONCAT(e.logradouro, ', ', e.numero, ' - ', e.cidade, ' ', e.uf) AS local,
        p.data_hora_realizacao AS data
    FROM peneira p 
    JOIN endereco e 
        ON p.id_endereco = e.id_endereco 
    JOIN time t 
        ON p.id_time = t.id_time
    JOIN categoria_base c
        ON p.id_categoria_base = c.id_categoria_base;

CREATE VIEW vw_listar_peneiras_por_cidade AS
    SELECT
        CONCAT(e.cidade, ' - ', e.uf) AS Cidade,
        COUNT(*) AS quantidade
    FROM peneira p
    JOIN endereco e
        ON p.id_endereco = e.id_endereco
    GROUP BY
        e.cidade,
        e.uf;

CREATE VIEW vw_listar_peneiras_por_estado AS
    SELECT
        e.uf,
        COUNT(*) AS quantidade
    FROM peneira p
    JOIN endereco e
        ON p.id_endereco = e.id_endereco
    GROUP BY
        e.uf;