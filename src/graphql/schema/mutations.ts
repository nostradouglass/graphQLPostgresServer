import graphql, {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

import UserType from "./user_type";
const queries = require('../queries/userQueries')

export const mutation: GraphQLObjectType<
  string,
  () => object
> = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean },
      },
      resolve(parentValue, { first_name, last_name, email, is_admin }) {
          return queries.createUser(first_name, last_name, email, is_admin)
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean }
      }, 
      resolve(parentValue, {id, first_name, last_name, email, is_admin}) {
        return queries.updateUser(id, first_name, last_name, email, is_admin)
      }
    },
    removeUser: {
      type: UserType,
      args: {
        id: {type: GraphQLID},
      }, 
      resolve(parentValue, {id} ) {
        return queries.deleteUser(id)
      }
    }
  },
});
