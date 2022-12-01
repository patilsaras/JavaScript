async function addition(num1,num2){

    var promise=new Promise(function(resolve,reject){
        setTimeout(()=>resolve(num1+num2),3000);
    });
    await promise
    .then(function(res){
        console.log(res);
    })
        .catch(function(er){
console.log(er);
        
    });
}
 addition(2,3);

