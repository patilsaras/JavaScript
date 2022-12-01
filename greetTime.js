var time1=new Date();
var hr=time1.getHours();

if(hr<12)
console.log("Good Morning");
if(hr>=12 && hr<16)
console.log("Good Afternoon");
if(hr>=16 && hr<=20)
console.log("Good evening");
if(hr>=20 && hr<=24)
console.log("Good Night");

