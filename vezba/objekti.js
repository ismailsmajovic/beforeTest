const myCar ={

    marks:{
    marka1: 'audi',
    marka2: 'mercedes',
    marka3: 'bmw',
    marka4: 'opel',
    marka5: 'pezo',
    },
    predjenaKilometraza:{
        marka1: 250000,       //da li moze imati vise vrednosti kljuc npr string i broj vracena', 
        marka2: 300000,
        marka3: 500000,
        marka4: 200000,
        marka5: 700000,
    },

    prosecnaKm: function(){

        return this.predjenaKilometraza.marka1
         + this.predjenaKilometraza.marka2
          + this.predjenaKilometraza.marka3
           + this.predjenaKilometraza.marka4
           + this.predjenaKilometraza.marka5 / 5     // zasto ne moze da se podeli sa kao sa nizovima predjenaKimlometraza
    },

    boje: {
        boja1: 'crna',
        boja2 : 'bela',
        boja3: 'crvena',
        boja4: 'orange',
        boja5: 'plava'
    },

    pogon :{

        pogon1: 'prednji',
        pogon2 :'zadnji'

    },

    godinaProizvodnje:{

        godina1: 2018,
        godina2: 2019,
        godina3: 2020,
        novaAuta:{
            marka1: 2024,
            marka2: 2022,
            marka3: 2023,
        }
    },
   prosecnaStarost : function(){
        return this.predjenaKilometraza.marka1 + this.predjenaKilometraza.marka2 + this.predjenaKilometraza.marka3 / 3
   },
   napraviVS: function(){
        return [this.boje.boja1, this.boje.boja2];
   }
}

console.log(myCar.prosecnaKm(), myCar.predjenaKilometraza.marka1, myCar['boje']['boja1'], myCar.godinaProizvodnje.novaAuta.marka1, myCar.prosecnaStarost(), myCar.napraviVS());

//console.log(myCar.prosecnaKm(), myCar['boje']['boja1'] )





/* prosecnaStarost: function (){
        return this.godinaProizvodnje.godina1 + this.godinaProizvodnje.godina2 + this.godinaProizvodnje.godina3;  //+ this.godinaProizvodnje.novaAuta.marka1 + this.godinaProizvodnje.novaAuta.marka2;  //zanimljivo isprintalo je dva rezultata
    },



    napraviVS: function(){
        return [this.boje.boja1.toUpperCase(), this.boje.boja2.toUpperCase()];   //kako ovde vise elementa da pretvorimo u velika slova, pa logicno preko nizova 
    },*/