import express from 'express';
import expressJwt from 'express-jwt';
import {ApolloServer, gql} from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers/resolvers.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';


async function initServer(){
    const app = express();
    app.use(cors());
    dotenv.config();

    const apolloServer = new ApolloServer({ 
        typeDefs, 
        resolvers,
        context: ({ req }) => {
            const user = req.user || null;
            return { user };
        }
    })
    await apolloServer.start();
    
    apolloServer.applyMiddleware({ app })
    app.use((req, res) => {
        res.send('Server start and running!')
    })
    const PORT = process.env.PORT || 5000;
    try {
        await mongoose.connect(process.env.DB_HOST);
            console.log(`Connected to MongoDB at the port ${PORT}`)
    } catch (error) {
        console.log(error)
    }

    app.listen(PORT, ()=>
        console.log(`Express server is up and running on port ${PORT}`))
}

initServer()
