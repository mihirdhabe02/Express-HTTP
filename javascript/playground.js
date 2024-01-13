const myMap = new Map();
myMap.set("Mihir", 21);
myMap.set("Dhruv", 22);
myMap.set("Rajendra", 23);
console.log(myMap.get("Mihir"));

myMap.forEach(function(key, value)
{
    console.log(`${key}:${value}`);
});

function createMapChar(str)
{
    const charMap = new Map();
    for(const char of str)
    {
        charMap.set(char, (charMap.get(char) ||0) + 1);
    }
    return charMap;
}
console.log(createMapChar("Mihir"));
