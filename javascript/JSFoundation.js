let firstName = "Mihir";
const age = 18;
let isMarried = false;
console.log("this person's name is " + firstName + "and he is " + age+"years old");
if(isMarried)
{
    console.log(firstName+"is married");
}
else
{
    console.log(firstName+"is not married");
}
for(let i =0; i<2; i++)
{
    console.log(firstName+"is married");
}
const ageArray = [1,2,3,4,5,6,7,8,9,10];
for(let i=1;i<ageArray.length;i+=2)
{
    console.log(ageArray[i]);
}

const user1 = [{
    firstName: "Mihir",
    age: 21,
    gender: "male"
}, {firstName: "Dhruv", age: 24, gender: "male"}];
//console.log(user1["firstName"]+user1.age+user1.gender);
console.log(user1[0]["firstName"]);

function stringAddition(a, b, functioncall)
{
    functioncall(a+b);
}
//console.log(stringAddition("Mihir and ", "Dhruv"));
function displayData(data)
{
  console.log(data);
}
console.log(stringAddition(2,3,displayData));

function sum(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function calculate(a,b,functionpass)
{
    return displayData(functionpass(a,b));
}
calculate(5,4,sum); //answer should be 9
calculate(6,4,subtract); //answer should be 2

function greet()
{
    console.log("welcome to Mihir's VS code")
}
setTimeout(greet, 7*1000);