var student1 = {
    fName: "Sujoy",
    sName: "Das",
    age: 20,
    roll: 10,
    phone: "01737300123"
};

var mobile = {
    Price: 20000,
    model: "POCO M-3",
    brand: "Xiaomi"
}

var course={
    bookName: "Javascript",
    teacher: "Jhonkar Mahabub",
    totalClass : 10,
    institute: "Programming Hero"

}


console.log(course.teacher);
var courseTeacher = course.teacher;
console.log(courseTeacher);

course.totalClass = 20;
course["totalClass"]= 15;
var tclass = "totalClass";
course[tclass] = 12;
console.log(course.totalClass);