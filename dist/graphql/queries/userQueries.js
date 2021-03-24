"use strict";
// const Pool = require("pg").Pool;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//   user: "temp",
//   host: "localhost",
//   database: "full_project",
//   password: "password",
//   port: 5432,
// });
const pool_1 = __importDefault(require("./pool"));
const tableName = 'users';
const getUsers = () => {
    return pool_1.default
        .query(`SELECT * FROM ${tableName} ORDER BY id ASC`)
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
const getUserById = (id) => {
    return pool_1.default
        .query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const createUser = (first_name, last_name, email, is_admin) => {
    return pool_1.default
        .query(`INSERT INTO ${tableName} (first_name, last_name, email, is_admin) VALUES ($1, $2, $3, $4)`, [first_name, last_name, email, is_admin])
        .then((data) => {
        return data.rowCount;
    })
        .catch((err) => {
        throw err;
    });
};
const updateUser = (id, first_name, last_name, email, is_admin) => {
    return pool_1.default
        .query(`UPDATE ${tableName} SET first_name = $2, last_name = $3 email = $4 is_admin = $5 WHERE id = $1`, [id, first_name, last_name, email, is_admin])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const deleteUser = (id) => {
    return pool_1.default
        .query(`DELETE FROM ${tableName} WHERE id = $1`, [id])
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
//# sourceMappingURL=userQueries.js.map