const BASE_URL = 'https://jsonplaceholder.typicode.com';
                                                        //bilo users bilo sta drugo radice kod
 const findUsers = async () =>{
    const first = await fetch(`${BASE_URL}/users`);
    const second = await first.json();
    return second;
 }


/* findUsers().then((res)=> {
    return console.log(res);
 })*/


 const makeUsers = findUsers().then((korisnici)=>{
    const tree = korisnici.map((korisnik)=>{
        return {
            name: korisnik.name,
            id : korisnik.id,
            email: 'ile'
        };
    });return tree;
 });


makeUsers.then((korisnici)=>{
    return console.log(korisnici)
})


























/*
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const findUsers = async()=>{
    const response = await fetch(`${BASE_URL}/users`);
    const post = await response.json();
    return post;
}
//console.log(findUsers());
//findUsers().then((result)=>console.log(result));
 
const myUsers = findUsers().then((users)=>{
    const find = users.map((user)=>{
        return {
            name: 'isko',
            username: user.username,   
            email: user.email
        };
        });
        return find;
});*/

//console.log(myUsers());
//myUsers.then((reslt)=>console.log(reslt));