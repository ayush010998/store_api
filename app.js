require('dotenv').config()
require('express-async-errors');



const express=require('express');
const app=express();

const connectDB=require('./db/connect');
const productsRouter=require('./routes/products');

const port=process.env.PORT||3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('we are ready');
})

app.use('/api/v1/products',productsRouter);


const notFoundMiddleware=require('./middleware/not-found');
const errorMiddleware=require('./middleware/error-handler');


const start= async ()=>{
    try{

        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))

    }catch(error){
        console.log(error);

    }

}
start();