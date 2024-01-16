const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const app = express();

//secret key to generate JWT token
const secretKey = "17a56";

//middleware for body parsing
app.use(express.json());

//zod for schema check;
const schema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string()
});

const schemaLogin = zod.object({
    email: zod.string().email(),
    password: zod.string()
});

//middleware function to check schema 
function checkSchemaRegistration(req, res, next)
{
    const inputVal  = schema.safeParse(req.body);
    if(inputVal)
    {
        next();
    }
    else
    {
        return res.status(401).json({msg: "inputs are not in the right format"});
    }
}

function checkSchemaLogin(req, res, next)
{
    const inputVal  = schemaLogin.safeParse(req.body);
    if(inputVal)
    {
        next();
    }
    else
    {
        return res.status(401).json({msg: "inputs are not in the right format"});
    }
}

//list of user
const users = [];


// registration function 
app.post('/register', checkSchemaRegistration, (req, res)=>
{
    users.push(req.body)
    res.json({msg: "Registration Successfull"})
});



//login function
app.post('/login', checkSchemaLogin, (req, res)=>
{
    const userEmail = req.body.email;
    const userPassword = req.body.password;
     let pos = 1;

    //check if user exist 
    let flag = false;
    for(let i=0; i<users.length; i++)
    {
        if(users[i].email == userEmail && users[i].password == userPassword)
        {
            flag = true;
            pos = i;
        }
    }
    if(flag == false)
    {
        return res.status(403).json("user doesn't exist");
    }
     
    var token  = jwt.sign(userEmail, secretKey);
    return res.json({token});
} );

//Get Request
app.get('/users', (req, res) => {
    const token = req.headers.authorization;
try{
    const decoded = jwt.verify(token, secretKey);
    const username = decoded.name;
    const userList = [];
    for(let i=0; i<users.length; i++)
    {
        if(users[i].name!= username)
        {
            userList.push(users[i]);
        }
    }
    return res.json(userList);
}
catch(err)
{
    return res.status(401).json({msg: "something went wrong"});
}
});

app.listen(3000, ()=>
{
    console.log("listening on port 3000");
});