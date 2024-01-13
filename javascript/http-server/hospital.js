const express = require('express');
const app = express();

app.get('/health-checkup', (req, res)=>
{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username === "mihir" && password === "pass")) 
    { 
        res.status(400).json({msg: "Something wrong with your inputs"})
        return 
    }
    if(!kidneyId == 1 && !kidneyId == 2)
    {
        res.status(400).json({msg: "Something wrong with your inputs"})
        return  
    }
    res.json({msg: "User Authenticated, Welcome again Boss ! Your Kidneys look good , time to get that iphone"})
    
    //res.json({msg: "Alert , No Kidneys Found, How are buying that Iphone 15 !?" })
});

app.listen(3000, ()=>
{
    console.log("listening on port 3000");
})
