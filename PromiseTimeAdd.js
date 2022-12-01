var promise=(num1,num2)=>new Promise(function(resolve,reject){

    setTimeout(()=>resolve(num1+num2),5000);
    
 });
 
 promise(3,4)
 .then(function (res){
     console.log(res);
 })
 .catch(function(){
     console.log("error");
 })