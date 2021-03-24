import graphql, {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import UserType from "./user_type";
import VideoType from './video_type'
const userQueries = require("../queries/userQueries");
const videoQueries = require("../queries/videoQueries");

interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_admin: boolean;
}

const RootQuery: GraphQLObjectType<
  string,
  () => object
> = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }) {
          return userQueries.getUserById(id) as IUser;
        },
      },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return userQueries.getUsers();
      },
    },
    video: {
        type: VideoType,
        args: { video_id: { type: GraphQLID } },
        resolve(parentValue, { video_id }) {
          return videoQueries.getVideoById(video_id);
        },
      },
      videos: {
        type: new GraphQLList(VideoType),
        resolve() {
          return videoQueries.getVideos();
        },
      },

  }),
});

export default RootQuery;
