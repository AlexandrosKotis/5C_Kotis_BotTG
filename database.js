//Importazione sqlite
const sqlite3 = require('sqlite3');

// Connessione al database 
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Errore nella connessione al database:', err.message);
  } else {
    console.log('Database SQLite connesso correttamente.');
  }
});

// Creazione della tabella 
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      task TEXT NOT NULL,
      done INTEGER DEFAULT 0
    )
  `, (err) => {
    if (err) {
      console.error('Errore nella creazione della tabella:', err.message);
    } else {
      console.log('Tabella "todos" verificata/creata con successo.');
    }
  });
});

// Esportazione DB
module.exports = db;
