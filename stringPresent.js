function findString(str1,str2)
{
    var arr=str1.split(' ');
    var flag=0,i;
    console.log(arr.length);
    for(i=0;i<arr.length;i++){
        if(arr[i]==str2)
        flag=1;
    }
   // console.log(arr.length);
   if(flag===1)
   console.log("String is present");
   else
   console.log("String is not present");
}

findString("hi i am sara","ok");