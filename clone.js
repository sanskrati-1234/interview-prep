const clone = (obj)=>{
    let newObj ={};
    for(let o in obj){
        if(typeof obj[o] ==="object"){
            newObj[o]=clone(obj[o])
        }else{
            newObj[o]=obj[o]
        }
    }
    
    return newObj;
}

let a = {
    name:"sans",
    details:{
        age:26
    }
}

let b = clone(a);


a.details.age =28

console.log(b)
