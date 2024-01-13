const express = require('express');
const app  =  express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    } ]
}];


app.use(express.json());
app.get('/', (req, res)=>
{
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let totalHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++)
    {
        if(johnkidneys[i].healthy)
        {
            totalHealthyKidneys = totalHealthyKidneys + 1;
        }
    }
    const unhealthyKidneys = numberOfKidneys - totalHealthyKidneys;
    res.json({numberOfKidneys, totalHealthyKidneys, unhealthyKidneys})
})

app.post('/', (req, res)=>
{
    const isHealthy  = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    //const totalHealthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy === isHealthy).length;
    res.json({msg: "Done"})
})

app.put('/', (req, res)=>
{
    for(let i=0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

const port  = 3000;
app.listen(port, ()=>
{
    console.log("server started and listening");
})