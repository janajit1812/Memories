import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js';

const app=express();
dotenv.config();
console.log('Hello'+dotenv);
// console.log(process.env.PORT);
// console.log(process.env.CONNECTION_URL);

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// '/posts' is added to define the url. By doing this, we are adding a fixed prefix '/post' before each and every endpoint urls that are defined inside the postRoutes. 
app.use('/posts',postRoutes); 
app.use('/user',userRoutes);

const PORT= process.env.PORT || 5000;
// const CONNECTION_URL='mongodb+srv://janajit:janajit123@cluster0.j84u9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

await mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server is running at port no: ${PORT}`)))
.catch((error)=> console.log(error.message));   

//mongoose.set('useFindAndModify', false);