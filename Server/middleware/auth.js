import jwt, { decode } from 'jsonwebtoken';

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    try {
        const isUserAuth=token.length<500;
        if(token && isUserAuth){
            const decodeData= jwt.verify(token,'test');
            console.log(decodeData);
            req.userId=decodeData?.id;
        }
        else{
            // This is for gAuth, but in this project it is also handled using JWT token. So this else block of the code will never get executed
            const decodeData= jwt.decode(token);
            req.userId=decodeData?.sub;
        }
        next();  // Next function is used to imply that after successful execution of this middleware function, the next function defined in the routes/posts file will be immediately executed.
    } catch (error) {
        console.log("The following error has happened --> "+error);
    }
}

export default auth;