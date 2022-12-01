var sum=0;
function getGrade(marks){
    for(let i in marks){
      sum=sum+marks[i];
    }
    console.log(sum/marks.length);
    return sum/marks.length;
}
var result=getGrade([90,80,80]);
//console.log(result);
if(result<40)
console.log('You are fail');
else if(result>40 && result<70)
console.log('second class');
else if(result>=70 && result<=80)
console.log('First class');
else if(result>80 && result<=100)
console.log('distinction');
else
console.log('Invalid Result');