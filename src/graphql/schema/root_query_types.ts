import graphql, { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import UserType from './user_type'
const queries = require('../queries/userQueries')

interface IUser {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    is_admin: boolean
}


const RootQuery: GraphQLObjectType<string, () => object> = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return queries.getUsers()
        }
    },
    user: {
        type: UserType,
        args: { id:  {type: GraphQLID }},
        resolve(parentValue, { id }) {
                return queries.getUserById(id) as IUser;
        }
    }
    })
})


export default RootQuery