function waitWithCallback(callback) {
    setTimeout(() => {
      callback("Done waiting!");
    }, 2000);
  }
  
  waitWithCallback((message) => {
    console.log(message); 
  });
  

   function checkNumber(n){

    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            
        
       if (n>10) {
         resolve("Number is large")
       } else{
        reject("Number is too small")
       }
    }, 1000);
    })
   }

   checkNumber(11)
   .then((message)=>{
  console.log(message)
   })
   .catch((error)=>{
     console.log(error)
   })