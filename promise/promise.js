const obecanje = new Promise((resolve, reject)=>{
    response = 200;
    setTimeout(()=>{
        for(let i = 0; i < 900000; i++) {
           
            if (response === 200) {
                resolve([1, 2, 3, 4, 5 ]);
            }else if(response === 201){
                reject('doslo je do neke greske:');
            }else if(response < 200){
                reject('nastavi sa disanjem')
            }
        }
    
    }, 4000)
       
});

obecanje.then((mes)=>{
    console.log('uspesno', mes)
})
.catch((mes)=>{
    console.log('neupesno', mes)
})
.finally((mes)=>{
    console.log('zivi', mes)
})



console.log('pocinjemo sa programom...');
for(let i = 0; i < 20; i++){
    setTimeout(()=>{
        broji()
        broji()
    }, 3000)
}
function broji(){
    console.log('-----')
}