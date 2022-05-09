const User = require('../../models/user.model');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const generateToken = require('../../token/jwt');

module.exports = {
  Mutation: {
    async registerUser(_, { registerInput: { username, email, password } }) {
      //Do input validation
      if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please include all fields');
      }

      const userExists = await User.findOne({ email });

      if (userExists) {
        throw new ApolloError(
          'A user is already registered with the email: ' + email,
          'USER_ALREADY_EXISTS',
        );
      }

      //Hash password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);

      //Create user
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      newUser.token = generateToken(newUser);

      const res = await newUser.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async loginUser(_, { loginInput: { email, password } }) {
      // Do input validation
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }

      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        // save user token
        user.token = generateToken(user);

        return {
          id: user.id,
          ...user._doc,
        };
      } else {
        throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
      }
    },
  },
  Query: {
    user: (_, { ID }) => User.findById(ID),
  },
};
