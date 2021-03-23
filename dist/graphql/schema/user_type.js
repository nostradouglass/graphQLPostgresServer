"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const userType = new graphql_1.GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        is_admin: { type: graphql_1.GraphQLBoolean }
    })
});
exports.default = userType;
//# sourceMappingURL=user_type.js.map