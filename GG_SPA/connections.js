const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    port: 8889,
    host: "localhost",
    user: "GGAdmin",
    password: "admin",
    database: "process.env.GGUsers"
    
});

module.exports.pool = pool;