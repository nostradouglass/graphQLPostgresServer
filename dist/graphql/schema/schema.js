"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const root_query_types_1 = __importDefault(require("./root_query_types"));
const mutations_1 = require("./mutations");
exports.default = new graphql_1.GraphQLSchema({
    query: root_query_types_1.default,
    mutation: mutations_1.mutation
});
//# sourceMappingURL=schema.js.map