"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_type_1 = __importDefault(require("./user_type"));
const queries = require('../queries/userQueries');
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        users: {
            type: new graphql_1.GraphQLList(user_type_1.default),
            resolve() {
                return queries.getUsers();
            }
        },
        user: {
            type: user_type_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return queries.getUserById(id);
            }
        }
    })
});
exports.default = RootQuery;
//# sourceMappingURL=root_query_types.js.map