"use strict";
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "temp",
    host: "localhost",
    database: "full_project",
    password: "password",
    port: 5432,
});
const getUsers = () => {
    return pool
        .query("SELECT * FROM users ORDER BY id ASC")
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
const getUserById = (id) => {
    return pool
        .query("SELECT * FROM users WHERE id = $1", [id])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const createUser = (first_name, last_name, email, is_admin) => {
    return pool
        .query("INSERT INTO users (first_name, last_name, email, is_admin) VALUES ($1, $2, $3, $4)", [first_name, last_name, email, is_admin])
        .then((data) => {
        return data.rowCount;
    })
        .catch((err) => {
        throw err;
    });
};
const updateUser = (id, first_name, last_name, email, is_admin) => {
    return pool
        .query("UPDATE users SET first_name = $2, last_name = $3 email = $4 is_admin = $5 WHERE id = $1", [id, first_name, last_name, email, is_admin])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const deleteUser = (id) => {
    return pool
        .query("DELETE FROM users WHERE id = $1", [id])
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