var c=0
var sum=[];
function sumOfaaray(arr1,arr2){
    while(c<arr1.length && c<arr2.length){
        sum.push(arr1[c]+arr2[c]);
        c++;
    }
    if(arr1.length===c)
    {
        for(var i=c;i<arr2.length;i++)
        {
            sum.push(arr2[c]);
            c++;
        }
        
    }
    else{
        for(var i=c;i<arr1.length;i++)
        {
            sum.push(arr1[c]);
            c++;
        }
    }
} 
sumOfaaray([1,2,3,4],[1,2,3]);
console.log(sum);

