var evenCount=0;
var OddCount=0;

function countEvenOddNumber(){

for(let i=1;i<100;i++){
    if(i%2==0){
        evenCount++;
    }
    else
    {
        OddCount++;
    } 
}


}

var prime=0;
function primeNumber(){
var num=1,flag=0;
while(num<=100)
{
for(i = 2;i<num;i++)
{
if((num%i)==0)
{
flag=0;
}
}
if(flag==1)
{
prime++;
}
num++;
flag=1;
}
}
countEvenOddNumber();
primeNumber();
console.log(evenCount);
console.log(OddCount);
console.log(prime);