const express = require('express');
const app  = express()
const port = 3000

app.use((req, res, next)=>
{
    console.log("middleware working");
    next();
})

app.use(express.static('./public'));

app.set("view engine", "ejs");
app.get('/',(req,res)=>
{
    res.send('Hello World');
})
app.get('/ejs', (req, res)=>
{
    res.render("index", {age:12});
})

app.get('/contacts/:username', (req,res)=>
{
    res.send(`Welcome to Conatacts Page : ${req.params.username}`);
})

app.listen(port, ()=>
{
    console.log(`Example app listening on  port ${port}`);
}) 

app.get('/query', (req, res)=>
{
    const n = req.query.n;
    let sum  = 0;
    for(i=0; i<n; i++)
    {
        sum+=i;
    }
    res.send("The sum is :" + sum);
})

//query params