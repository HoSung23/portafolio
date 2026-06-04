const Database = require('better-sqlite3');

const db = new Database('portafolio.db');

db.exec(`CREATE TABLE IF NOT EXISTS proyectos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    url TEXT,
    imagen TEXT,
    creado TEXT DEFAULT (datetime('now'))
    )
`);

module.exports = db;