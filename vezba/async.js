const BASE_URL = 'https://jsonplaceholder.typicode.com';

const findUsers = async(users)=>{
    const prva = await fetch(`${BASE_URL}/comments`);
    const druga = await prva.json();
    return druga;
}

//findUsers().then((res)=> console.log(res));

const makeComments = findUsers().then((users)=>{
    const first = users.map((user)=>{
        return {
            name: user.name,
            id: user.id,
            email: 'ismajovic20@gmal.com'
        };
    }); return first;
});

makeComments.then((rezultat)=> { return console.log(rezultat)});