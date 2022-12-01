var fact=1;
var promise=(evenNum)=>new Promise(function(resolve,reject){

    
    if(evenNum>0)
    {
        for(var i=1;i<=evenNum;i++){
            fact=fact*i;
        }
        resolve(fact) ;
    }
    
    else
    reject();

});
promise(5)
.then(function(res){
    console.log('Factorial:',res);
})
.catch(function(){
    console.log("not valid number");
});

/*
function fact(num){
    if(num===0 || num===1)
    return 1; 
    return num*fact(num-1);
}

console.log(fact(5));*/

