async function addition(num1,num2) {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(num1+num2), 3000)
    });
  
    let result = await promise; 
  
    console.log("Sum is",result) 
  }
  
  addition(4,5);