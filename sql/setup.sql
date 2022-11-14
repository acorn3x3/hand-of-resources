-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
);

INSERT INTO games(
    name,
    genre
)

VALUES
('League Of Legends 1', 'MOBA 1'),
('League Of Legends 2', 'MOBA 2'),
('League Of Legends 3', 'MOBA 3'),
('League Of Legends 4', 'MOBA 4'),
('League Of Legends 5', 'MOBA 5');
