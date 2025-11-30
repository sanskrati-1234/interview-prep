function withTimeout(promise, time) {
  let timer = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout!!"), time)
  );

  return Promise.race([promise, timer]);
}

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p----")
    },10)
})

withTimeout(p,0).then((r)=>console.log(r)).
catch(e=>console.log(e))
