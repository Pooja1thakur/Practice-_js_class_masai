// var matrix=[
//     [18,24,1],
//     [45,67,88],
//      [90,98,87],
//      [12,16,19],
// ];
// //console.log(matrix[2][1]);

// //console.log(matrix[0][matrix.length-2]);

// // var mat=[
// //     [1,2],
// //     [3,4],
// //     [5,6],
// //     [7,8],

// // ];

// // for(let i=0;i<mat.length;i++){
// //     for(let j=0;j<mat[0].length;j++){
// // console.log(mat[i][j])
// //     }

// // }

// // let score= [
// //     [100,200,300],
// //     [50,60,70],
// // ]
// // let sum=0;
// // for(let i=0;i<score.length;i++){
// //     for(let j=0;j<score[0].length;j++){
// // sum+=score[i][j]
// //     }

// // }
// // console.log(sum)


 var mat=[
     [1,2,3],
     [4,5,6],
   [7,8,9],

 ]
// let left="";
// let right=""

// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
// if(i==j){
//     left+=mat[i][j]
// }
// if(i+j==mat.length-1){
//     right+=mat[i][j]
// }
//     }


// }
// console.log(left)
// console.log(right)

// let bag=[]
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
// bag.push(mat[i][j])
//     }
// }
// console.log(bag)

  



//replace odd in 0
// let sum=""
// for(let i=0;i<mat.length;i++){
// for(let j=0;j<mat[0].length;j++){
// if(mat[i][j]%2!==0){
//     mat[i][j]=0

// }


//     }
// console.log(mat)
// }
   

//boundry sum
// let sum1=0;
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
// //console.log(mat[i][j])
// if(i===0 || j===0 || i===mat.length-1 || j===mat.length-1){
//     sum1+=mat[i][j]
// }

//     }
// }
// console.log(sum1)

let mat1=[
    [1,2],
    [3,4]
];

let mat2=[
    [5,6],
    [7,8]
];


for(let i=0;i<mat1.length;i++){
for(let j=0;j<mat2.length;j++){
    mat1[i][j]=mat1[i][j]+mat2[i][j]

}
}

console.log(mat1)






