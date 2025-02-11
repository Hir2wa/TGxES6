//regex    are  regular expression
let sentence = "  these  is  my sentence ";
// used
let regex = /is/;
console.log(regex.test(sentence));


function dup(s) {
    return s.map(x => x.replace(/(.)\1+/g,'$1'))
  };


  function birdCode(arr){
    return arr.map(function(x){
      let a = x.toUpperCase().split(/[ -]/)
      switch(a.length){
        case 1: return a[0].substr(0,4)
        case 2: return a[0].substr(0,2) + a[1].substr(0,2)
        case 3: return a[0][0] + a[1][0] + a[2].substr(0,2)
        case 4: return a[0][0] + a[1][0] + a[2][0] + a[3][0]
        default: return x;
      }
    });
  }


  const regexx = /(\d+)([a-zA-Z]*)/;
const str = "3hey5hello2hi";
const match = regexx.exec(str);
console.log(match);
