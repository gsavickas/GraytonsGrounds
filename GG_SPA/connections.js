const mysql = require("mysql");
const config = require("..config/");
let pool = mysql.createPool({
    connectionLimit: 10,
    port: 3306,
    host: "process.env.DBhost",
    user: "process.env.DBuser",
    password: "process.env.DBpassword",
    database: "process.env.DBdatbase"
    
});

module.exports.pool = pool;

/*
config vars would reference these variables

require("./config.js");

host: "process.env.DBhost",
user: "process.env.DBuser",
password: "process.env.DBpassword",
database: "process.env.DBdatbase"

*/