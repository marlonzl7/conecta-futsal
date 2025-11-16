USE conecta_futsal;

CREATE VIEW vw_listar_peneiras AS
    SELECT 
            t.nome as Time,
            c.nome as 'Categoria de Base',
            CONCAT(e.logradouro, ' ', e.numero, ' ', e.cidade) AS Local,
            p.data_realizacao AS Data
        FROM 
            peneira p 
                JOIN endereco e 
                    ON p.id_endereco = e.id_endereco 
                JOIN time t 
                    ON p.id_time = t.id_time
                JOIN categoria_base c
                    ON p.id_categoria = c.id_categoria;