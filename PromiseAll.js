
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

Promise.all([p1, p2, p3])
  .then(values => {
    console.log(values);
  })
  .catch(err => console.log(err));'
