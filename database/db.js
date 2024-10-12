import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const db = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
});

db.authenticate()
  .then(() => {
    console.log('> Connection successful!');
  })
  .catch(() => {
    console.error('> Error in connection!');
  }); // Verifica se conectou com sucesso ao banco de dados

export default db;