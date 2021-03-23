const Pool = require("pg").Pool;

const pool = new Pool({
  user: "temp",
  host: "localhost",
  database: "full_project",
  password: "password",
  port: 5432,
});

interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_admin: boolean;
}

const getUsers = () => {
  return pool
    .query("SELECT * FROM users ORDER BY id ASC")
    .then((data: any) => {
      return data.rows as object[];
    })
    .catch((err: any) => {
      throw err;
    });
};

const getUserById = (id: string) => {
  return pool
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((data: { rows: IUser[] }) => {
      return data.rows[0] as IUser;
    })
    .catch((err: any) => {
      throw err;
    });
};

const createUser = (
  first_name: string,
  last_name: string,
  email: string,
  is_admin: boolean
) => {
  return pool
    .query(
      "INSERT INTO users (first_name, last_name, email, is_admin) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, email, is_admin]
    )
    .then((data: any) => {
      return data.rowCount;
    })
    .catch((err: any) => {
      throw err;
    });
};

const updateUser = (
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  is_admin: boolean
) => {
  return pool
    .query(
      "UPDATE users SET first_name = $2, last_name = $3 email = $4 is_admin = $5 WHERE id = $1",
      [id, first_name, last_name, email, is_admin]
    )
    .then((data: any) => {
      return data.rows[0];
    })
    .catch((err: any) => {
      throw err;
    });
};

const deleteUser = (id: string) => {
  return pool
    .query("DELETE FROM users WHERE id = $1", [id])
    .then((data: any) => {
      return data.rows;
    })
    .catch((err: any) => {
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
