const obecanje = new Promise((resolve, reject)=>{
    response = 200;

    setTimeout(()=>{

        for(let i = 0; i < 900000; i++) {
            if (response === 9000) {
                resolve[1, 2, 3, 4, 5 ];
            }else{
                reject('doslo je do neke greske:');
            }
        }
    }, 3000)
    
});

obecanje.then((mes)=>{
    console.log(mes)
})
.catch((mes)=>{
    console.log(mes)
})

console.log('pocinjemo sa programom');
setTimeout(()=>{
    console.log('-----------------')
}, 1000)