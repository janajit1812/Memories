Use of Redux for the state-change handling in this.

First we have to create the redux store, where all the current state of the objects will be stored.
We have to import the {Provider} class in the index.js of the main app.
We will create the store in the index.js file using creatStore hook.
const store=createStore(reducers,compose(applyMiddleware(thunk))) -> This syntax creates the store in the index.js file of the reducers folder which will contain all the current states of the variables present in the redux store.

<!-- ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
,document.getElementById('root'))-->
This syntax helps all the components associated like child, their child of the App.js file to access the redux app directly. 

------------------------------REDUX-THUNK--------------------------------

Redux-Thunk: Redux only handles synchronous actions by default. If you need to deal with asynchronous tasks, like fetching data from an API, redux-thunk helps by allowing action creators to return functions that dispatch actions later (after the async logic has completed). 
Basic Concept of a Thunk:
A thunk is a function that delays the evaluation of an operation. In the context of Redux, it’s used to delay the dispatch of an action or to dispatch actions asynchronously.

How redux-thunk Works:
When an action creator returns a function instead of a plain action object, redux-thunk intercepts it.
It passes dispatch and getState to that function, so you can execute side effects (e.g., fetch data) and dispatch real actions when appropriate.
-----------------------------------------------------------------------------/

-------------------------------APPLYMIDDLEWARE-----------------------------
applyMiddleware: applyMiddleware is a Redux store enhancer that allows you to add middleware to your Redux store. Middleware in Redux sits between the dispatching of an action and the moment it reaches the reducer, allowing you to intercept, log, modify, or perform side effects (such as making asynchronous requests).

Middleware Examples:
redux-thunk: Enables writing action creators that return functions for handling async actions.
redux-logger: Logs every action and state change to the console.
----------------------------------------------------------------------------/

Two folders have been created namely: action and reducers.

// Action folder
Inside action, a file named as Posts.js has been initialized. In this file, all the actions that will be performed are declared.
Two callback functions are declared inside the posts.js file. One callback function is for fetching data (coming as a response after api call) from the response and send it to the reducer and another is to post data to the backend and also storing the returned response which coming after the post request. The functions are getPosts() and createPost(data).

getPost() ->
Inside this callback function, the response is being fetched using axios get request from the backend api and in turn the "FETCH_ALL" action is being dispatched using the dispatch object of the redux-thunk library that has been imported. Inside the post.js file of reducers folder, the functionality of those dispatched actions are declared. For the 'FEtCH_ALL' action, it fetches all the response data received from the getApi call and the return it as a state named as 'post' to the index.js file of the reducers folder. Inside the index.js file, another redux hook called combineReducers is used which helps to store more than one state variables from different reducers. Here only one state it defined, i.e posts. 

createPost() ->
