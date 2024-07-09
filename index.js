const express = require('express')
const app=express();
const mongoose=require('mongoose')
const port=3001;
const cors=require('cors')
const typeDefs=require('./schema')
const resolvers=require('./resolvers');
const userApiFormRouter = require('./routes/userRoutes')
const {ApolloServer}=require('apollo-server-express')
const url ='mongodb+srv://kalyanilavanya12345:kWXsaJbOUz5eLWiQ@cluster0.vujwptm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(express.json());
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})
const server= new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFormRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.listen(port,()=>{
        console.log('Server Live on Port 3001!!!!!!!!!!!!!')
        
    })
}

StartServer();
