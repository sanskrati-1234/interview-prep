let arr = [-10,-3,4,5,6,7,8,9]
let i=0;
for(let j=0;j<arr.length;j++){
    if(i%2===0 && arr[j]<0){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
    }else if(i%2===1 && arr[j]>0){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
    }
}

console.log(arr)

[
  -10, 4, -3, 5,
    6, 7,  8, 9
]
