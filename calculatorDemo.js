function operation(a,b,op){
    if(op==='+')
    return a+b;
    else if(op==='-')
    return a-b;
    else if(op==='*')
    return a*b;
    else if(op==='/')
    return a/b;
    else
    console.log('not valid operation');
  }
  
  var c=operation(2,2,'+');
  console.log(c);