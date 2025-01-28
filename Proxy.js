// syntax  var p = new  Proxy(target,handle)




  //  example  1
   let  handle = {
    get(target,key){
      return key in target ? target[key] : 37;
    }
   }



   var p= new Proxy({},handle);
   p.a=1;
   p.b=4;


   console.log(p.a,p.m);
   



   //  example 2:   can help  to validate  data pasing to  the object


   let validate ={
    set: function(obj,prop,value){
        if(prop==='age'){
            if(typeof value !== 'number' || Number.isNaN(value)){
                console.log("age must me  a number")
            }
            if(value<0){
                console.log('age must be a positive number')
            }
        }
        obj[prop]=value
        return true;
    }
   }





   let person = new Proxy({},validate);
   person.age='ss';
    console.log(person);
    