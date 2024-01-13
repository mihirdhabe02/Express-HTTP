const express = require('express');
const app = express();
const zod = require('zod');
 //zod is used for input validation
app.use(express.json());

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.post('/', (req, res)=>
{
    const kidneys = req.body.kidneys;
    const inputVal = schema.safeParse(kidneys);
    console.log(req.body);
    //const kidneyLength = kidneys.length;
    res.send({inputVal})
});


app.listen(3000, ()=>
{
    console.log("listening on port 3000");
})