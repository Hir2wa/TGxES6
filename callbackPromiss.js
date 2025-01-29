function waitWithCallback(callback) {
    setTimeout(() => {
      callback("Done waiting!");
    }, 2000);
  }
  
  waitWithCallback((message) => {
    console.log(message); 
  });
  