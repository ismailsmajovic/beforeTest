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
});

//console.log(myUsers());*/
myUsers.then((reslt)=>console.log(reslt));