import graphql, {GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

const userType: GraphQLObjectType<string, () => object> = new GraphQLObjectType(
{
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        first_name: {type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean }
    })
}
)

export default userType
