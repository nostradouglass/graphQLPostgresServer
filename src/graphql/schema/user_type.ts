import graphql, {GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} from 'graphql'
import videoType from './video_type'
const videoQueries = require('../queries/videoQueries')

const userType: GraphQLObjectType<any, () => object> = new GraphQLObjectType(
{
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        first_name: {type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean },
        videos: {
            type: new GraphQLList(videoType),
            resolve(parentValue, args) {
                console.log(parentValue)
                return videoQueries.getVideosByUserId(parentValue.id)
            }
        }
    })
}
)

export default userType
