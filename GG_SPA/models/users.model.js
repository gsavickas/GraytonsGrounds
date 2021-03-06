const pool = require("../connections").pool;
const bcrypt = require("bcrypt");

function create(req, res){
    console.log(req.body.email);
    pool.query("SELECT * FROM users WHERE email = ?", 
    [req.body.email], (err, queryReturn)=>{
        console.log(err);
        if(queryReturn[0]){
            return res.send({error:"USER ALREADY EXISTS"})
        }
        let password = bcrypt.hashSync(req.body.password, 5);
        let email = req.body.email;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        pool.query("INSERT INTO users (firstName, lastName, email, password) VALUES(?,?,?,?)", [firstName, lastName, email, password], (err, result)=>{
            if(!err){
                return res.send({message: "Signed Up!"});
            }
            res.status(500).send({error: "SOMETHING BROKE"})
        })
    })    
}
 
function getAll(req, res){
    pool.query("SELECT id, email FROM users", (err, result)=>{
        res.send({
            error: err,
            users: result
        })
    })
}

function login(req, res){
    pool.query("SELECT * FROM users WHERE email = ?", [req.body.email], (err, result)=>{
        if(result[0]){
            if( bcrypt.compareSync(req.body.password, result[0].password)){
                return res.send({message: "Welcome Back!"})
            }
            else{
                return res.send({error: "Incorrect email or Password"});
            }
        }
        res.send({error: "Incorrect email or Password"})
    })
}

function sanitizeUser(user){
    var currentUser = cleanUser
    currentUser.firstName = user.firstName;
    currentUser.lastName = user.lastName;
    currentUser.email = user.email;
}
module.exports.getAll = getAll;
module.exports.login = login;
module.exports.create = create;