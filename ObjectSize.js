var size=0;
function getSize (obj) {
   var key;
   for (key in obj) {
       if(obj.hasOwnProperty(key))
    size++;
   }
   return size;
};

var student = { 
name : "saras", 
sem : "II", 
rollno : 1,
age:23 };

var s = getSize(student);
console.log(s);