const myStudents =[
    {ime:'Faris', prezime: 'mecinovic', age: 23, reslt: 3},
    {ime:'iSKO', prezime: 'SMAJOVIC', age: 21, reslt: 9},
    {ime:'amina', prezime: 'peric', age: 45, reslt: 2},
    {ime:'muZAFER', prezime: 'hamidovic', age: 76, reslt: 6}
]

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