"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const videoType = new graphql_1.GraphQLObjectType({
    name: "VideoType",
    fields: () => ({
        video_id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString },
        users_id: { type: graphql_1.GraphQLID },
    })
});
exports.default = videoType;
//# sourceMappingURL=video_type.js.map