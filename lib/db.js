import mysql from 'mysql2/promise';

// Creamos la conexión usando variables de entorno (para seguridad)
export const db = await mysql.createConnection({
  host: import.meta.env.DB_HOST,
  user: import.meta.env.DB_USER,
  password: import.meta.env.DB_PASSWORD,
  database: import.meta.env.DB_NAME,
  port: import.meta.env.DB_PORT || 3306,
});

console.log('--> ¡Conectado a MySQL exitosamente!');