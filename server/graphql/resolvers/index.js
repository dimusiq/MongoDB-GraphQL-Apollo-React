const usersResolvers = require('./user.resolvers');
const todoResolvers = require('./todo.resolvers')

module.exports = {
  Query: {
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
