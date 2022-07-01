const myStudents =[
    {ime:'Faris', prezime: 'mecinovic', age: 23, reslt: 3},
    {ime:'iSKO', prezime: 'SMAJOVIC', age: 21, reslt: 9},
    {ime:'amina', prezime: 'peric', age: 45, reslt: 2},
    {ime:'muZAFER', prezime: 'hamidovic', age: 76, reslt: 6}
]

const obecanje = new Promise((resolve, reject)=>{

       
        //years();


setTimeout(()=>{
    if (myStudents.age > 50) {
        resolve(age);
    }else{
        reject('something wrong')
    }

}, 2000)
        
    
})

obecanje.then((message)=>{
    console.log('uspesno izvuceni podaci', message)
})
.catch((message)=>{
    console.log('greska', message)
})












/*
const findStundent =(students)=>{
    const regular = students.reduce((prev, curr)=>{
        return prev + curr;
    })
    return regular;
}**/


const years = (array)=>{
    const godine = array.filter((arr)=>{
        return arr.age > 30;
    })
    const godine2 = godine.map((arr)=>{
        return arr.age;
    })
    return godine2;
}
console.log(years(myStudents))