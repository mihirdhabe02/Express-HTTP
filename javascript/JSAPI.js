// Week 1.3 Basic JS API's

var a = "mihir";
function getLength(str)
{
  console.log("The length of string is: "+ str.length);
}
getLength("MIHIR");

function findIndexOf(str1, target)
{
  console.log("The index of str1 in target string  is : ", target.lastIndexOf(str1));
}

findIndexOf("DHABE", "MIHIR DHABE DHABE");
str = "MIHIR DHABE DHABE";
console.log(str.slice(0,1));
a = "hello world";
console.log(a.replace("world", "javascript" ));

words = "hi My name is Mihir";
senetence =  "    I LOVE BASKETBALL   ";
console.log(words.split(" "));
console.log(words.split("h"));
console.log(senetence.trim().toLowerCase());

number = "1234.56knsjbsj"
console.log(parseFloat(number));

arr = [1,2,3,4];
arr.push(5);
console.log(arr);  
arr.pop();
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(1));
console.log(arr);

arr2 = [5,6,7,8];
console.log(arr.concat(arr2));
function addOne(number)
{
   number = number+1;
  console.log(number);
}
arr2 = arr2.forEach(addOne);
console.log(arr2);

class Animal {
  constructor(name, speaks, color)
  {
    this.name = name;
    this.speaks = speaks;
    this.color = color;
  }
  static species()
  {
    console.log("The species is Animal");
  }
  speak()
  {
    console.log(this.name + " says " + this.speaks);
  }
  }

let dog = new Animal("dog", "woof", "brown");
dog.speak();
Animal.species();

const currDate = new Date();
console.log(currDate.getMonth());

const users = {
  name: "MIHIR",
  age: 21,
  gender: "male"
}
console.log(users);

userdata = '{"name": "MIHIR","age": 21,"gender": "male"}'


const extracted = JSON.parse(userdata);
console.log(extracted);

const newstr = JSON.stringify(users);
console.log(JSON.parse(newstr));