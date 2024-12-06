//ASCII value 


function totalvalue(a){
    sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i].charCodeAt()-96
    }
    return sum;
}
a="aba"
console.log(totalvalue(a))