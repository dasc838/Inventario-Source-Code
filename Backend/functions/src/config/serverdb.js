const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "inventario.cnvyjlll4hcx.us-east-1.rds.amazonaws.com",
    user: "daniel",
    password: "Daniel016",
    database: "inventario"
});

conn.connect((error) => {
    if (error) {
        return console.error('error: ' + error.message);
    }
    else console.log("Servidor de Base de Datos corriendo");
});


module.exports = conn;