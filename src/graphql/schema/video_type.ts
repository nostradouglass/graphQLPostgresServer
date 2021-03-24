import graphql, {GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

const videoType: GraphQLObjectType<string, () => object> = new GraphQLObjectType(
{
    name: "VideoType",
    fields: () => ({
        video_id: { type: GraphQLID },
        title: {type: GraphQLString },
        url: { type: GraphQLString },
        users_id: { type: GraphQLID },
    })
}
)

export default videoType
