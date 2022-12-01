var vowels=0;
var promise=(str)=>new Promise(function(resolve,reject){
     
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="a" || str.charAt(i)=="A" ||  str.charAt(i)=="e" || str.charAt(i)=="E" ||str.charAt(i)=="o" ||str.charAt(i)=="O" || str.charAt(i)=="u" || str.charAt(i)=="U"||str.charAt(i)=="i" ||str.charAt(i)=="I")
        {
            vowels++;
        }
    }
    
    resolve(vowels);
});

promise("Saras")
.then(function(res){
    console.log(res);
})
.catch(function(){
    console.log("Error");
});
