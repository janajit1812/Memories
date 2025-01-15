import axios from 'axios';

// const url='http://localhost:5000/posts';
// const url2='http://localhost:5000/user';

const API=axios.create({baseURL: 'http://localhost:5000'});
// const url='/posts';

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile'))?.token}`;
    }
    return req;
});

export const fetchPosts=()=>{
    // return axios.get(url);
    return API.get('/posts');
};

export const createPost=(newPosts)=>{
    // return axios.post(url,newPosts);
    return API.post('/posts',newPosts);
};

export const updatePost=(id,newPosts)=>{
    // return axios.patch(`${url}/${id}`,newPosts);
    return API.patch(`/posts/${id}`,newPosts);
}

export const deletePost=(id)=>{
    // console.log(`Inside deletePost with objectId: ${id}`);
    // return axios.delete(`${url}/${id}`);
    return API.delete(`/posts/${id}`);
}

export const likeCounts=(id)=>{
    // return axios.patch(`${url}/${id}/likedPost`);
    return API.patch(`/posts/${id}/likedPost`);
}

// export const createUser=(formData)=>{
//     return axios.post(`${url2}/signup`,formData);
// }


export const signIn=(formData)=>{
    return API.post(`/user/signin`,formData);
};
export const signUp=(formData)=>{
    return API.post(`/user/signup`,formData);
};
export const googleSignUp=(googleData)=>{
    return API.post(`/user/googleSignUp`,googleData);
};