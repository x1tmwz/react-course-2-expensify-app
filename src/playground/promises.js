const promise = new Promise((resolove,reject)=>{
    setTimeout(()=>{
        resolove('this is my resolved data');
    },1500)
    
})
console.log('b');
promise.then((res)=>{
    return res;
}).catch((err)=>{console.log(err)})
console.log('a');