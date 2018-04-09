/*var gender = prompt ("Male or female?");
var age = prompt ("How old are you?");
if (gender === "female" && age > 18) {
    alert ("Free drink!");
} else if (age < 18) {
    alert ("You can't drink!");
}
else if (gender === "male" && age > 18) {
    alert ("You can drink but you must pay!");
}


for (var number = 0; number <=20; number ++) {
    if (number % 5 === 0 && number % 3 === 0){
        console.log ("FizzBuzz");
    }
    else if (number % 5 === 0) {
        console.log ("Fizz");
    }
    else if (number % 3 === 0) {
        console.log ("Buzz");
    }
    else {
        console.log (number);
    }
}

var myColor = ["Red", "Green", "White", "Black"];
var sentence = myColor[0]
for (var i = 1; i < myColor.length; i++){
  sentence = sentence + " + " + myColor[i];
}
console.log(sentence);
*/

var number = "025468";
array = number.split("");
farray = [];
console.log(array);
for (i = 0 ; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i+1] % 2 === 0) {
        farray.push(array[i])
        farray.push("-");
    }
else {
    farray.push(array[i]);
}
}
console.log(farray.join(""))

var array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count=0;
var countstore=1;
var item=0;
for (var i=0; i<array.length; i++){
  for (var y=0; y<array.length; y++){
    if (array[i]==array[y]){
       count++;
    }
    if(countstore<count)
    {
      var countstore=count;
      var item = array[i];
    }
  }
  count=0;
}

console.log(item);





