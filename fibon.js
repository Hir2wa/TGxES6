 function * fibon(a=0,b=1,count) {
  for (let i = 0; i < count; i++) {
  yield a; // We Pause and Return value of `a`
  [a,b]=[b,a+b];   //  used to destructuring    which avoid  decraraction of temp variable  for swapping
   
  }  
 }
 let fib = fibon(0,1,5); // these  return iterible object   so you can use   defferent ways to print like   loop ,spread, or .next()
 //console.log(fib)     return  (Object [Generator] {}) in the  console
 console.log([...fib]);




 function* rotate(str) {
    let newSet = new Set(); 
    //for (let i = 0; i < str.length; i++) {
        for (let _ of Array(str.length).keys()) { 
      str = str.slice(1) + str[0]; 
      newSet.add(str); 
      yield str; 
    }
  
    
   
    return [...newSet];
  }
  
  let rotatedStrings = rotate("Hello");
  console.log([...rotatedStrings]); 
  