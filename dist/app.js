"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./graphql/schema/schema"));
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
let app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    graphiql: !(process.env.NODE_ENV == 'production')
}));
app.use("/", indexRouter);
app.use("/users", usersRouter);
module.exports = app;
//# sourceMappingURL=app.js.map