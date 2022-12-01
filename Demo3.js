
var fact=1;
    function factorial(num){

        var promise=new Promise(function (resolve,reject){

            while(num>0){
        
                fact=fact*num;
                num--;
    
            }
            resolve(fact);
        });
            
           
    }

factorial(5);
promise
.then(function(res){

    console.log(res);
})
.catch(function(err){
    console.log(err);
});


