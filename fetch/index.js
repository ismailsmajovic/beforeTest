const getUsers = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await response.json();
    /*return post.map((el)=>{
        return {ime: 'faris', id: el.id};
    })*/
    return post;
}
getUsers().then((res) => console.log(res));