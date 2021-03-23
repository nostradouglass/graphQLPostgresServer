"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = void 0;
const graphql_1 = require("graphql");
const user_type_1 = __importDefault(require("./user_type"));
const queries = require('../queries/userQueries');
exports.mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: user_type_1.default,
            args: {
                first_name: { type: graphql_1.GraphQLString },
                last_name: { type: graphql_1.GraphQLString },
                email: { type: graphql_1.GraphQLString },
                is_admin: { type: graphql_1.GraphQLBoolean },
            },
            resolve(parentValue, { first_name, last_name, email, is_admin }) {
                return queries.createUser(first_name, last_name, email, is_admin);
            },
        },
        updateUser: {
            type: user_type_1.default,
            args: {
                id: { type: graphql_1.GraphQLID },
                first_name: { type: graphql_1.GraphQLString },
                last_name: { type: graphql_1.GraphQLString },
                email: { type: graphql_1.GraphQLString },
                is_admin: { type: graphql_1.GraphQLBoolean }
            },
            resolve(parentValue, { id, first_name, last_name, email, is_admin }) {
                return queries.updateUser(id, first_name, last_name, email, is_admin);
            }
        },
        removeUser: {
            type: user_type_1.default,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve(parentValue, { id }) {
                return queries.deleteUser(id);
            }
        }
    },
});
//# sourceMappingURL=mutations.js.map