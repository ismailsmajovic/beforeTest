/*Из низа бројева изаберите парне двоструке бројеве и израчунајте збир користећи методе филтера низа, мапирања и редукције.
 
нека бројеви = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findNum =(brojevi)=>{
    const first = brojevi.filter((broj)=>{
        return broj % 2 === 0;
    })
    const second = first.map((broj)=> broj * broj)

    const third = second.reduce((prev, curr)=> prev + curr);
    return third;
}
console.log(findNum(num));