import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sessions.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL , email TEXT NOT NULL , token TEXT NOT NULL, name TEXT, lastName TEXT, phoneNumber TEXT)',
        [],
        () => resolve(),
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertSession = ({ localId, email, token, name, lastName, phoneNumber }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO sessions (localId, email, token, name, lastName, phoneNumber) VALUES (?, ?, ?, ?, ?, ?);',
        [localId, email, token, name, lastName, phoneNumber],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM sessions', [], (_, result) => resolve(result), (_, error) => reject(error));
    });
  });
  return promise;
};
