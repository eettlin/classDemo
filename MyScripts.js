
function firstLast()
{
    alert("stuOne.last = " + stuOne.last);
}

//  Object literal
var student = {
    "first": "Larry",
    "last": "Jones",
}


var stuOne = Object.create(student);

stuOne.fist = "Bob";
stuOne.last = "Smith";

stuOne.nickname = "Curly";
stuOne.middle = "fred";

