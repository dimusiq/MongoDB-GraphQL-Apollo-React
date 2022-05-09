const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const typeDefs = require('./graphql/schema/typeDefs');
const resolvers = require('./graphql/resolvers/index');

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }),
});

mongoose
	.connect(process.env.DB_HOST, { useNewUrlParser: true })
	.then(() => {
		console.log(`Connected to MongoDB at the port ${PORT}`);
		return server.listen({ port: 5000 });
	})
	.then((res) => {
		console.log(`Apollo server is up and running on port ${res.port}`);
	});
