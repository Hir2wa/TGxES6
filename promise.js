// const myPromise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         const success = true; 
//         if (success) {
//             resolve("Operation succeeded!");
//         } else {
//             reject("Operation failed.");
//         }
//     }, 1000);
// });


// myPromise
//     .then(result => {
//         console.log(result); 
//     })
//     .catch(error => {
//         console.error(error); 
//     });


   

//     const mySundaePromise = new Promise(function(resolve, reject) {
//         setTimeout(function createSundae(flavor = 'chocolate') {
//             const sundae = {
//                 flavor: flavor,
//                 cone: true,
//                 iceCream: true
//             };
            
           
//             const iceCreamConeIsEmpty = (flavor) => flavor === 'strawberry';  // Example: strawberry is out of stock
            
           
//             if (iceCreamConeIsEmpty(flavor)) {
//                 reject(`Sorry, we're out of ${flavor} flavor :-(`);
//             } else {
//                 resolve(sundae);
//             }
//         }, Math.random() * 2000);  
//     });
    
 
//     mySundaePromise
//         .then(sundae => {
//             console.log(`Sundae ready with ${sundae.flavor} ice cream!`);
//         })
//         .catch(error => {
//             console.error(error);
//         });
    






//         function thePromise(){
//             return  new Promise((resolve,reject)=>{
      
//           setTimeout((name)=>{

//          resolve(`  Hello ${name}`)         

//           },1000)
//           })
//         }



      
        
   
//         thePromise('Alain')
//         .then(give =>  {
//             console.log(give);
            
//         })
//         .catch(error=>{
//             console.log("Error:" , error);
            
//         })
   

     
function getWeather() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const weather = 'sunny'; 
        if (weather) {
          resolve(weather); 
          reject('No weather data found'); 
        }
      }, 1000);
    });
  }
  
  
  function getWeatherEmoji(weather) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        switch (weather) {
          case 'sunny':
            resolve(' sunny imoji');
            break;
          case 'cloudy':
            resolve(' cloudy imoji');
            break;
          default:
            reject(' no imoji found');
            break;
        }
      }, 1000);
    });
  }
  
  // Chain the Promises
  getWeather()
    .then(function(weather) {
      console.log('Weather condition:', weather);
      return getWeatherEmoji(weather); 
    })
    .then(function(emoji) {
      console.log('Weather emoji:', emoji);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });

            










          function checkNumber(num) {
            return new Promise(function(resolve, reject) {
              setTimeout(function() {
                if (num > 0) {
                  resolve("Positive number!"); 
                } else {
                  reject("Number is not positive!"); 
                }
              }, 1000); 
            });
          }
          
        
          checkNumber(5)
            .then(function(result) {
              console.log(result); 
            })
            .catch(function(error) {
              console.log(error); 
            });