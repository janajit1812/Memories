import {CREATE,UPDATE,DELETE,FETCH,LIKECOUNT} from '../constants/actionType';

export default (posts =[], action) =>{
    switch (action.type) {
        case DELETE:
            //console.log(`Hello ${posts}`);
            return posts.filter((post)=> post._id!==action.payload);
        case LIKECOUNT:
            return posts.map((post)=> post._id===action.payload._id?action.payload:post);
        case UPDATE:
            return posts.map((post)=> post._id===action.payload._id?action.payload:post);
        case FETCH:
            return action.payload;
        case CREATE:
            return [... posts,action.payload];
        default:
            return posts;
    }
};

