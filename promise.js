const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const success = true; 
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});


myPromise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });


   

    const mySundaePromise = new Promise(function(resolve, reject) {
        setTimeout(function createSundae(flavor = 'chocolate') {
            const sundae = {
                flavor: flavor,
                cone: true,
                iceCream: true
            };
            
           
            const iceCreamConeIsEmpty = (flavor) => flavor === 'strawberry';  // Example: strawberry is out of stock
            
           
            if (iceCreamConeIsEmpty(flavor)) {
                reject(`Sorry, we're out of ${flavor} flavor :-(`);
            } else {
                resolve(sundae);
            }
        }, Math.random() * 2000);  
    });
    
 
    mySundaePromise
        .then(sundae => {
            console.log(`Sundae ready with ${sundae.flavor} ice cream!`);
        })
        .catch(error => {
            console.error(error);
        });
    



        function thePromise(){
            return  new Promise((resolve,reject)=>{

          setTimeout((name)=>{

        console.log(`  Hello ${name}`)         

          },1000)
  })
        }



        //  we  gona   consume the promise 
        