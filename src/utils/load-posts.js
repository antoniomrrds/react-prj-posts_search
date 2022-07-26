export const loadPosts = async () =>{
    const URL = 'https://jsonplaceholder.typicode.com/'
    const postResponse = await fetch(`${URL}posts`);
    const photosResponse = await fetch(`${URL}photos`);

    const [posts, photos] = await Promise.all([postResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const postAndPhotos = postsJson.map((post, index) => {
        return {
            ...post, cover: photosJson[index].url
        }
    })
    return  postAndPhotos;
}