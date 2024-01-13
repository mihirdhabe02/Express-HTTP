const axiosRequest = require('axios')

axiosRequest.get('http://www.boredapi.com/api/activity/').then(response =>
{
    console.log(`${response.data.activity}`);
}).catch(error =>
    {
        console.log(`${error}`);
    })


function printHelloWorld()
{
    return new Promise(function(resolve)
{
        setTimeout(function job()
        {
            resolve("hello world");
        }, 2000);
    });
}

printHelloWorld().then(function(data)
{
    console.log(data);
});
