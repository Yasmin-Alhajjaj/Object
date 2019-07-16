console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var represents = {
  firstname: "yasmin",
  lastname: "alhajjaj",
  age: 23,
  dob: 2000 / 01 / 01,
  favoritefood: ["mansif", "dwaly", "pizza"],
  favoritemovie: ["saw", "12", "jk", "bhk", "hkh"]
}





var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }

];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(a) {
  var str = [];
  for (var i = 0; i < a.length; ++i) {
    str[i] = a[i].name.first;

  }
  return str;

}
console.log(firstName(persons))
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(a) {
  var avg = 0;
  for (var i = 0; i < a.length; ++i) {
    avg = avg + a[i].age;

  }
  return avg / (a.length);

}
console.log(averageAge(persons))

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(a) {
  var age1 = a[0].age;
  for (i = 0; i < a.length; i++) {
    if (age1 < a[i].age) {
      age1 = a[i].age;
      var r = i;

    }
  }
  return (a[r].name.first + " " + a[r].name.last)
}
console.log(olderPerson(persons))
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(a) {
  var length = (a[0].name.first + "" + a[0].name.last).length;
  for (i = 1; i < a.length; i++)
    if (length < (a[i].name.first + "" + a[i].name.last).length) {
      length = (a[i].name.first + "" + a[i].name.last).length
      var r = i
    }
  return (a[r].name.first + " " + a[r].name.last)
}
console.log(longestName(persons))

//////////////////////////////////////////////////////////////////
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
var str = "My name is alex mercer class name B baba mama hello Hello HELLO";
function repeatWord(a) {
  var g = {};
  var count = 0;
  var b = a.split(" ");
  for (var i = 0; i < b.length; i++) {
    b[i] = b[i].toLowerCase()
    var word1 = b[i];
    for (var x = 0; x < b.length; x++) {
      if (word1 === b[x])
        count += 1;
    }
    g[word1] = count;
    count = 0;
  }
  return g;
}
console.log(repeatWord(str))

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(a) {
  var g = {};
  var b = a.split("");
  var count = 1
  for (i = 0; i < b.length; i++) {

    if (g[b[i]])
      g[b[i]] += 1;
    else { g[b[i]] = 1; }

  }
  return g;

}
console.log(repeatChar("mamababatetacedo"))

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(x, b) {
  var g = {};
  for (i = 0; i < b.length; i++) {
    if (x[b[i]])
      g[b[i]] = x[b[i]];
  }
  return g
}
console.log(selectFromObject({ a: 1, cat: 3 }, ['a', 'cat', 'd']))
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(a) {
  var b = [];

  for (var i in a) {
    b.push(i);
    b.push(a[i])
  }

  return b;
}
console.log(objectToArray({ firstName: "Moh", age: 24 }))

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(a) {
  var b = {};
  for (i = 0; i < a.length; i = i + 2) {
    b[a[i]] = a[i + 1];

  }
  return b


}
console.log(arrayToObject(["firstName", "Moh", "age", 24]))
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(a) {
  b = {};
  for (var i in a) {
    if (typeof a[i] === "number")
      b[i] = a[i];

  }
  return b
}
console.log(onlyNumber({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }))
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(a) {
  b = {};
  for (var i in a) {
    if (typeof a[i] === "string")
      b[i] = a[i];

  }
  return b
}
console.log(onlyString({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }))

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(a) {
  b = {};
  for (var i in a) {
    if (typeof a[i] === "object")
      b[i] = a[i];

  }
  return b
}
console.log(onlyArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }))

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(a) {
  var b = [];

  for (var i in a) {
    b.push(i);
  }

  return b;
}
console.log(keysArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }))


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(a) {
  var b = [];

  for (var i in a) {
    b.push(a[i]);
  }

  return b;

}
console.log(valuesArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }))
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var o = { a: 1, b: 3, c: 4 };
o["a"] = 4;
o["c"] = 66;
delete o["b"]
console.log(o)
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(o) {
  var b = 0
  for (var i in o) {
    b = b + 1;
  }

  return b;

}
console.log(objectLength({ a: 1, b: 2, c: 3, d: 4 }))
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(a) {
  var b = {}
  for (var i in a) {
    if(a[i]%2===0)
     b[i]=a[i];
  }

  return b;

}
console.log(evenValue({ a: 1, b: 2, c: 3, d: 4 }))



/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(a){
var long="0";
for(var i in a){
  if(i.length>long.length)
  long=i;
}
return a[long]



}
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}))
