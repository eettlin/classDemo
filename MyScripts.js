
function firstLast()
{
    alert(otherStudent.middle);
}

var student = {
    "first": "Larry",
    "last": "Jones",
}

var otherStudent = Object.create(student);

student.nickname = "Curly";
otherStudent.middle = "fred";

