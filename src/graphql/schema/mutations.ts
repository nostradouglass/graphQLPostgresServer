import graphql, {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

import UserType from "./user_type";
import VideoType from './video_type'
const userQueries = require('../queries/userQueries')
const videoQueries = require('../queries/videoQueries')

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
          return userQueries.createUser(first_name, last_name, email, is_admin)
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
        return userQueries.updateUser(id, first_name, last_name, email, is_admin)
      }
    },
    removeUser: {
      type: UserType,
      args: {
        id: {type: GraphQLID},
      }, 
      resolve(parentValue, {id} ) {
        return userQueries.deleteUser(id)
      }
    },
    addVideo: {
      type: VideoType,
      args: {
        title: { type: GraphQLString },
        url: { type: GraphQLString },
        users_id: { type: GraphQLString }
      },
      resolve(parentValue, { title, url, users_id }) {
          return videoQueries.createVideo(title, url, users_id)
      },
    },
  },
});
