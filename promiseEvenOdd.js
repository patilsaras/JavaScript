var promise=(Num)=>new Promise(function(resolve,reject){
   if(Num%2==0)
   resolve("Even Number")
   else
   reject("Odd Number");
});
promise(5)
.then(function(res){
    console.log(res);
})
.catch(function(er){
   console.log(er);
});

