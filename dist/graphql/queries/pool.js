"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "temp",
    host: "localhost",
    database: "full_project",
    password: "password",
    port: 5432,
});
exports.default = pool;
//# sourceMappingURL=pool.js.map