let obj1={
    name:"Alain",
    greet:()=>{
        return ` Hello ${this.name}`;
    }
}

obj1.greet();





let obj2= {
name: "Alain",
greet(){
    return ()=>{
 return ` Hello ${this.name}`;
}
}
};
obj2.greet();