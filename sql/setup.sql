-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    numplayers VARCHAR NOT NULL
);

INSERT INTO games (
    name,
    genre,
    numplayers
)

VALUES
('League Of Legends 1', 'MOBA 1', '10'),
('League Of Legends 2', 'MOBA 2', '10'),
('League Of Legends 3', 'MOBA 3', '10'),
('League Of Legends 4', 'MOBA 4', '10'),
('League Of Legends 5', 'MOBA 5', '10');

DROP TABLE IF EXISTS champions;

CREATE TABLE champions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    role VARCHAR NOT NULL,
    lane VARCHAR NOT NULL
);

INSERT INTO champions (
    name,
    role,
    lane
)

VALUES
('Aatrox', 'Fighter', 'Top'),
('Belveth', 'Split Pusher', 'Jungle'),
('Caitlyn', 'Sniper', 'Bot'),
('Diana', 'Mage', 'Mid'),
('Ekko', 'Assassin', 'Support');

DROP TABLE IF EXISTS regions;

CREATE TABLE regions(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    biome VARCHAR NOT NULL,
    location VARCHAR NOT NULL
);

INSERT INTO regions(
    name,
    biome,
    location
)

VALUES
('Demacia', 'Plains', 'West '),
('Freiljord', 'Tundra', 'North'),
('Ionia', 'Forrest', 'East'),
('Bilgewater', 'Islands', 'South'),
('Targon', 'Mountains', 'Southwest');
