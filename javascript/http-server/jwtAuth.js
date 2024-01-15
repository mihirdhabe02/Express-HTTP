const express = require('express');
const jwt = require('jsonwebtoken');

const jwtPassword = "123456";

const app = express();

//middleware 
app.use(express.json());

const allUsers = [
    {
        name: "Mihir Dhabe",
        username: "mihirdhabe@gmail.com",
        password: "123"
    },
    {
        name: "Dhruv Dhabe",
        username: "dhruvdhabe@gmail.com",
        password: "456"
    },
    {
        name: "Rugved Rane",
        username: "ruger@gmail.com",
        password: "789"
    }
];

function userExist(username, password) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === username && allUsers[i].password === password)
            return true;
    }
    return false;
}

//Post Request for creds

app.post('/sign-in', (req, res)=>
{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password))
    {
        return res.status(403).json({msg: "User doesnt exist in DB"});
    }

    var token = jwt.sign({username: username}, jwtPassword);

    return res.json({token,});
});

//Get Request
app.get('/users', (req, res) => {
    const token = req.headers.authorization;
try{
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const userList = [];
    for(let i=0; i<allUsers.length; i++)
    {
        if(allUsers[i].username!= username)
        {
            userList.push(allUsers[i]);
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

