Function.prototype.myCall = function (obj,...args){
    obj.temp =this ;
    obj.temp(...args)
}


let obj = {
    name:"Sanskrati"
}

function getName (a,b,c){
    console.log(this.name,a,b,c)
}

getName.myCall(obj,1,2,3)
