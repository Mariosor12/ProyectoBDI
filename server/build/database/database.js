const { Pool } = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5432,
};

const pool = new Pool(connectionData)

pool.connect()
    .then(response => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log('DB is not connected :c');
        client.end();
    })

module.exports = pool;