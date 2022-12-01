function sumofDigit(num){
    var sum=0;
    while(num>0){
        sum=sum + (num%10);
        num=Math.floor(num/10);
    }
    console.log(sum);
}
var count=0;
function armgStrongNum(num){
 var temp=num;
 var am=0;
 var rem=1,exp1=num.toString().length;
 console.log(exp1);
    while(num>0){
       rem=num%10;
        am=am+rem**exp1;
        num=Math.floor(num/10);

    }
console.log(am);
    if(temp==am)
    console.log("amstrng number");
    else
    console.log("not amrstrng number");
}

// between 1-1000
function armgStrongNum(num){
    var temp=num;
    var am=0;
    var rem=1,exp1=num.toString().length;
   // console.log(exp1);
       while(num>0){
          rem=num%10;
           am=am+rem**exp1;
           num=Math.floor(num/10);
   
       }
       if(temp==am)
       //console.log(temp);
       count++;
       
   }
   for(let i=1;i<=1000;i++)
   armgStrongNum(i);

   console.log(count);



//sumofDigit(123);
//armgStrongNum(371);


