const retry = (fn, retry, delay)=>{
      let attempts = 0;
    return new Promise((resolve, reject)=>{
        const att = ()=>{
            fn().then(resolve).catch(e=>{
                console.log("aaa")
                if(retry===attempts){
                   return reject(e)
                }
                 attempts++;
    
                console.log("failed")
                setTimeout(() => att(),delay)
           } )
        }
        att();
        
    })

}
async function getData() {
  const url = "https://example.org/products.jsonqqq";
 
  return fetch(url);
    
}

retry(getData,3,100)
