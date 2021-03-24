"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const video_type_1 = __importDefault(require("./video_type"));
const videoQueries = require('../queries/videoQueries');
const userType = new graphql_1.GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        first_name: { type: graphql_1.GraphQLString },
        last_name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        is_admin: { type: graphql_1.GraphQLBoolean },
        videos: {
            type: new graphql_1.GraphQLList(video_type_1.default),
            resolve(parentValue, args) {
                console.log(parentValue);
                return videoQueries.getVideosByUserId(parentValue.id);
            }
        }
    })
});
exports.default = userType;
//# sourceMappingURL=user_type.js.map