//ASCII value 


// function totalvalue(a){
//     sum=0;
//     for(let i=0;i<a.length;i++){
//         sum+=a[i].charCodeAt()-96
//     }
//     return sum;
// }
// a="aba"
// console.log(totalvalue(a))



//Generate all substrings of a given strings 's'.
// let str="masai";
// for(let i=0;i<str.length;i++){
//      let temp=""
//     for(let j=i;j<str.length;j++){
//        temp+=str[j]
//        console.log(temp)  
// }
// }



// //genrate the substring start with vowel.
// let str="masai";
// let count=0;
// for(let i=0;i<str.length;i++){
//      let temp=""
//     for(let j=i;j<str.length;j++){
//        temp+=str[j]
// if(temp[0]=='a' || temp[0]=='e' || temp[0]=='i' || temp[0]=='o' || temp[0]=='u'){
// count++
// }
// }
// }
// console.log(count)





//find substring   start with char k='a'
// let str="masai";
// let k='a'
// let count=0;
// for(let i=0;i<str.length;i++){
//      let temp=""
//     for(let j=i;j<str.length;j++){
//        temp+=str[j]
// if(temp[0]==k){
//     count++
// }
// }
// }
// console.log(count)





//substrin start starting and ending with same.
// let str="masai";
// let k='a'
// let count=0;

// for(let i=0;i<str.length;i++){
//      let temp=""
    
//     for(let j=i;j<str.length;j++){
//        temp+=str[j]
//        let n=temp.length
// if(temp[0]==temp[n-1]){
//     count++
// }
// }
// }
// console.log(count)






//find the sum of every subarrys.
let A=[1,2,3,4];

function finsumsubaary(A){
    n=A.length;
    for(i=0;i<n;i++){
        temp=[]
        for(j=i;j<n;j++){
            temp.push(A[j])
            console.log(findsum(temp))
            
            
        }
    }
}

function findsum(temp){
    let n=temp.length;
    let sum=0;
    for(i=0;i<n;i++){
        sum+=temp[i]
    }
    return sum
}
finsumsubaary([1,2,3,4])