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


   