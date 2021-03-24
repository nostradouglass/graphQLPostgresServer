"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = __importDefault(require("./pool"));
const tableName = 'videos';
const getVideos = () => {
    return pool_1.default
        .query(`SELECT * FROM ${tableName} ORDER BY video_id ASC`)
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
const getVideoById = (id) => {
    return pool_1.default
        .query(`SELECT * FROM ${tableName} WHERE video_id = $1`, [id])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const getVideosByUserId = (users_id) => {
    return pool_1.default
        .query(`SELECT * FROM ${tableName} WHERE users_id = $1`, [users_id])
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
const createVideo = (title, url, users_id) => {
    return pool_1.default
        .query(`INSERT INTO ${tableName} (title, url, users_id) VALUES ($1, $2, $3)`, [title, url, users_id])
        .then((data) => {
        return data.rowCount;
    })
        .catch((err) => {
        throw err;
    });
};
const updateVideo = (video_id, title, url) => {
    return pool_1.default
        .query(`UPDATE ${tableName} SET title = $2, url = $3 WHERE video_id = $1`, [video_id, title, url])
        .then((data) => {
        return data.rows[0];
    })
        .catch((err) => {
        throw err;
    });
};
const deleteVideo = (id) => {
    return pool_1.default
        .query(`DELETE FROM ${tableName} WHERE video_id = $1`, [id])
        .then((data) => {
        return data.rows;
    })
        .catch((err) => {
        throw err;
    });
};
module.exports = {
    getVideos,
    getVideoById,
    getVideosByUserId,
    createVideo,
    updateVideo,
    deleteVideo,
};
//# sourceMappingURL=videoQueries.js.map