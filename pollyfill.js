
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("done1")
    })
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("done2")
    })
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("done3")
    })
})



Promise.All = function (promises){
    return new Promise((resolve,reject)=>{
        let results = [];
        let complete = 0;
        promises.forEach((p,i)=>{
            Promise.resolve(p).then(res=>{
                results[i] = res;
             complete++;
             if(promises.length === complete){
                 resolve(results)
             }
            }).catch((err)=>reject(err))
        })
    })
}


Promise.All([p1, p2, p3])
  .then(values => {
    console.log(values);
  })
  .catch(err => console.log(err));
