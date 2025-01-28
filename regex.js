//regex    are  regular expression
let sentence = "  these  is  my sentence ";
// used
let regex = /is/;
console.log(regex.test(sentence));


function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g,'$1'))
  };
