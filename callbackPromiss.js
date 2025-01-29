function waitWithCallback(callback) {
    setTimeout(() => {
      callback("Done waiting!");
    }, 2000);
  }
  
  waitWithCallback((message) => {
    console.log(message); 
  });
  

   function checkNumber(n){

    return Promise((resolve,reject)=>{
       if (n>10) {
         resolve("Number is large")
       } else{
        reject("Number is too small")
       }
    })
   }