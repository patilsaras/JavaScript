var temp=0;
function reverNum(num1){
    var num=num1;
    var rem;
    while(num>0)
    {
        rem=num%10;
        temp=temp*10+rem;
        num=parseInt(num/10);
    }
    console.log(temp);
    if(parseInt(temp)!=parseInt(num1))
    console.log("Not palindrom");
    else
    console.log("palindrom");

}
reverNum(111);

