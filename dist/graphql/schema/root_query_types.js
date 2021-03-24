"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_type_1 = __importDefault(require("./user_type"));
const video_type_1 = __importDefault(require("./video_type"));
const userQueries = require("../queries/userQueries");
const videoQueries = require("../queries/videoQueries");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        user: {
            type: user_type_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return userQueries.getUserById(id);
            },
        },
        users: {
            type: new graphql_1.GraphQLList(user_type_1.default),
            resolve() {
                return userQueries.getUsers();
            },
        },
        video: {
            type: video_type_1.default,
            args: { video_id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { video_id }) {
                return videoQueries.getVideoById(video_id);
            },
        },
        videos: {
            type: new graphql_1.GraphQLList(video_type_1.default),
            resolve() {
                return videoQueries.getVideos();
            },
        },
    }),
});
exports.default = RootQuery;
//# sourceMappingURL=root_query_types.js.map