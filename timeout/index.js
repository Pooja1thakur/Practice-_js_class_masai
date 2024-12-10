// //  function threemes(){
//     setTimeout(() => {
//         console.log("Hello, Student!")
//     }, 1000);
//     setTimeout(() => {
//         console.log("Welcome to Javascript!")
//     }, 2000);
//     setTimeout(() => {
//         console.log("Let's learn timing functions!")
//     }, 3000);
//  }
//  threemes()





//  let timer = 10; 

// setInterval(() => {
//     console.log(timer); 
//     timer--; 

//     if (timer < 0) { 
//         clearInterval(setInterval()); 
//     }
// }, 1000);



// create new promis
// let mypromis=new Promise((resolve,rejecte)=>{

//    // resolve ("got job")//promis result
//     rejecte ("didnt get job")



// });
// mypromis.then((resolve)=>{
//    // console.log(resolve)
// })
// mypromis.catch((rejecte)=>{
//     console.log(rejecte)
// })





// let gotjob=false;
// let mypromis=new Promise((resolve, reject) => {
//     if(gotjob ){
//         resolve("yeahh I got job")
//     }else{
//         reject("didin get job")
//     }
// })
// mypromis
// .then((resolve)=>console.log(resolve));
// mypromis
// .catch((err)=>console.log(err))
// //console.log(mypromis)


// let int=4;
// let mypromis=new Promise((resolve, reject) => {
//     if(int%2==0){
//         resolve("num is even")
//     }else{
//         reject("num is odd")
//     }
// })
// mypromis
// .then((resolve)=>console.log(resolve));
// mypromis
// .catch((err)=>console.log(err))


// let otp=1234
// let mypromis=new Promise((resolve, reject) => {
//     if(otp==1234){
//         resolve("resolve")
//     }else{
//         reject("reject")
//     }
// })
// mypromis
// .then((resolve)=>console.log(resolve));
// mypromis
// .catch((err)=>console.log(err))


// Function to validate OTP
// function ckotp(userotp){
//     return new Promise((resolve, reject) => {
//       const rigthotp = "1234";  
//    if (userotp === rigthotp) {
//         resolve("Resolve");
//       } else {
//         reject("reject");
//       }
//     });
//   }
//   let input = prompt("enter otp:");
//   ckotp(input)
//     .then(result => {
//       console.log(result);  
//     })
//     .catch(err => {
//       console.log(err); 
//     });
  




// function multiply(){
//  return new Promise((resolve, reject) => {
//     let mul=num.map((out)=>out*3)
//     resolve(mul)
//  })
// }
// let num=[,1,2,3,4,5]

// async function getres(){
//     let out= multiply(num)
//     console.log(out)
// }
// (getres())



// Helper function to simulate delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function chargePhone() {
    try {
      console.log("Charging start");
  
    
      await  new Promise(resolve => setTimeout(resolve, 2000));;
      console.log("Battery at 25%");
  
      // Charging from 25% to 50% (2 seconds)
      await delay(2000);
      console.log("Battery at 50%");
  
      // Charging from 50% to 75% (3 seconds)
      await delay(3000);
      console.log("Battery at 75%");
  
      // Charging from 75% to 100% (3 seconds)
      await delay(3000);
      console.log("Battery at 100%");
  
      // Fully charged
      console.log("Phone fully charged!");
    } catch (error) {
      console.error("An error occurred while charging:", error);
    }
  }
  
  // Run the function
  chargePhone();
  