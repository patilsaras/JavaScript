function convertFirstLetter(str){
    var arr=str.split(' ');
    var arr1=[];
    var k=0;
    for( k in arr){
        console.log(arr[k].charAt(0).toUpperCase()+arr[k].slice(1)) ;
    }

    console.log(arr1.join(' '));
}

convertFirstLetter("hi i am sara"); 
