// 13) Write a JavaScript code to calculate maximum, minimum, sum and average of numbers in an 
//array. Make all validation.

function arrayDemo(){
    arr1=[1,2,3,4,5];
    var sum=0;
   // console.log(Math.min.apply(null,arr1));
   // console.log(Math.max.apply(null,arr1));
    var x=0;
    for( x in arr1)
     sum=sum+arr1[x];
 
     console.log(sum);
     console.log(sum/arr1.length);
    //Object
    var arr2=[{a:3},
     {a:3},
     {a:3}];
 var values=arr2.map(val=> val.a);
 //console.log(Math.max.apply(null,values));
 //console.log(Math.min.apply(null,values));
 var sum1=0;
    for( x in values)
     sum1=sum1+values[x];
     console.log(sum1);
     console.log(sum1/values.length);
 }
 
 arrayDemo();