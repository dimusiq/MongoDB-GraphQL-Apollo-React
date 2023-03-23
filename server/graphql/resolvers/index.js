const usersResolvers = require('./user.resolvers');
const todoResolvers = require('./todo.resolvers');

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...todoResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...todoResolvers.Mutation,
  },
};
