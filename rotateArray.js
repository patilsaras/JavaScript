function rotateArray(arr){

    var i=arr.length-1;
    var arr2=[],k=0;

    for(i;i>=0;i--){
        arr2[k]=arr[i];
        k++;
    }
    console.log(arr2);
    
}
rotateArray([5,4,3,2,1]);