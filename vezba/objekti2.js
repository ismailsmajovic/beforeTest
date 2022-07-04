const myCar = {
    marka: 'Audi',
    model: '80',
    godiste :{
        nova: 2022,
        polovna: 2010,
        stara: 1990,
        oldajmeri:{
            godinaProizvodnje: 1950,
            godinaProizvodnje2: 1960,
            godinaProizvodnje3: 1970
        }
    }
}

function makeSomething(colors, rating){
    return `${this.marka} ${this.model} ${this.godiste.oldajmeri.godinaProizvodnje2} ${colors} ${rating}`
}

console.log(makeSomething.call(myCar, 'bele boje', 9));

console.log(makeSomething.apply(myCar, ['crvene boje', 8]));

const withBint = makeSomething.bind(myCar);

console.log(withBint('bele boje', 7));

console.log('uspesno odradjeno ');