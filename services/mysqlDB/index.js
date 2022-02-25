const mysql   = require('mysql');
// const myconn  = require('express-myconnection'); //middleware
const dbOptions = {
    host : 'localhost',
    port : 3306,
    database : 'escuela_conduccion',
    user : 'root',
    password : ''
};
// Probar con el Pool
const conn = mysql.createConnection(dbOptions);
conn.connect();
conn.inicioTransaccion = () => {
    conn.query("BEGIN");
};
conn.hacerCommit = () => {
    conn.query("COMMIT");
};
conn.hacerRollback = () => {
    conn.query("ROLLBACK");
};

// const conn = mysql.createPool({connectionLimit: 20, ...dbOptions})
/*
conn.getConnection(function (err, con) {
    if (err) throw {code : "CONN_ERR", sqlMessage : "No se ha podido conectar a la base de datos"}
});
*/

// module.exports = myconn(mysql, dbOptions, 'single'); //middleware no funciona
module.exports = conn;
