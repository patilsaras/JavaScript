function findStrings(str,str1){
    var str2=str.split(' ');
    console.log(str2);
    console.log(str2.indexOf(str1));
    console.log(str.length);
    console.log(str2[0].concat(' Saras'));
    var str3=str2[3].split("");
    console.log(str3.reverse());
}

findStrings('Hi I am Sara','am');