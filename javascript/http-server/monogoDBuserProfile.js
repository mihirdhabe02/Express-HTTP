const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
const secretKey = "123456";

//body parser
app.use(express.json());

mongoose.connect("mongodb+srv://mihirdhabe02:" + encodeURIComponent("Davidgoggins@123") + "@mihircluster0.j3ye2vj.mongodb.net/user_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const User = mongoose.model("User", {
    name: String, 
    username: String, 
    password: String
})

//SIGN-UP
app.post('/sign-up', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    try {
        const userExist = await User.findOne({ username: username });

        if (userExist) {
            return res.status(401).json({ msg: "User already exists" });
        }

        const user = new User({
            name: name,
            username: username,
            password: password
        });

        await user.save();

        res.json({ msg: "User registration successful!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});


app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
/*

//checks if user exists in DB
function userExist(username, password)
{

}

//SIGN-IN
app.post('/sign-in', (req, res)=>
{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password))
    {
        return res.status.json({msg: "User does not exist"});
    }

    //return JWT to user
    var token = jwt.sign(username, secretKey);
    return res.json({token});
});


//GET Users

app.get('/users', (req, res)=>
{
    const token = req.headers.authorization;
    const decoded  =  jwt.verify(token, secretKey);
    const username = decoded.username;

})


*/