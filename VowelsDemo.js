
function getcountVowels(str){
  
    var count=0;
    for(var i=0;i<=str.length;i++){
       if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" || str.charAt(i)=="u")
       count++;
    }
    console.log('Count is: ',count);
  }
  
  getcountVowels('saras');
  