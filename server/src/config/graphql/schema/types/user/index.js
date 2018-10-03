import {  GraphQLObjectType,  GraphQLString,  GraphQLID, GraphQLInt, GraphQLList } from 'graphql';

export default new GraphQLObjectType({
  name: 'user',
  description: 'user type',
  fields () {
    return {
      id: {
        type: GraphQLInt,
        description: "This is representing user's ID",
        resolve (user) {
          return user.id;
        }
      },
      uuid: {
        type: GraphQLString,
        description: "This is representing user's uuid",
        resolve (user) {
          return user.uuid;
        }
      },
      username: {
        type: GraphQLString,
        description: "This is representing user's username",
        resolve (user) {
          return user.username;
        }
      },
      email: {
        type: GraphQLString,
        description: "This is representing user's email",
        resolve (user) {
          return user.email;
        }
      },
    };
  }
});