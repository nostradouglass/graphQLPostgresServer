import pool from './pool'

interface IVideo {
  video_id: string;
  title: string;
  url: string;
  users_id: any
}

const tableName = 'videos'

const getVideos = () => {
  return pool
    .query(`SELECT * FROM ${tableName} ORDER BY video_id ASC`)
    .then((data: any) => {
      return data.rows as object[];
    })
    .catch((err: any) => {
      throw err;
    });
};

const getVideoById = (id: string) => {
  return pool
    .query(`SELECT * FROM ${tableName} WHERE video_id = $1`, [id])
    .then((data: { rows: IVideo[] }) => {
      return data.rows[0] as IVideo;
    })
    .catch((err: any) => {
      throw err;
    });
};

const getVideosByUserId = (users_id: string) => {
  return pool
    .query(`SELECT * FROM ${tableName} WHERE users_id = $1`, [users_id])
    .then((data: { rows: IVideo[] }) => {
      return data.rows as object[];
    })
    .catch((err: any) => {
      throw err;
    });
};

const createVideo = (
  title: string,
  url: string,
  users_id: any,
) => {
  return pool
    .query(
      `INSERT INTO ${tableName} (title, url, users_id) VALUES ($1, $2, $3)`,
      [title, url, users_id]
    )
    .then((data: any) => {
      return data.rowCount;
    })
    .catch((err: any) => {
      throw err;
    });
};

const updateVideo = (
  video_id: string,
  title: string,
  url: string,
) => {
  return pool
    .query(
      `UPDATE ${tableName} SET title = $2, url = $3 WHERE video_id = $1`,
      [video_id, title, url]
    )
    .then((data: any) => {
      return data.rows[0];
    })
    .catch((err: any) => {
      throw err;
    });
};

const deleteVideo = (id: string) => {
  return pool
    .query(`DELETE FROM ${tableName} WHERE video_id = $1`, [id])
    .then((data: any) => {
      return data.rows;
    })
    .catch((err: any) => {
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
