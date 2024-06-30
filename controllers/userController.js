const pool = require('../db/db2.js');
const renderUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuario");
  res.render("users", { users: rows });
};

const createUsers = async (req, res) => {
  const newUser = req.body;
  await pool.query("INSERT INTO usuario set ?", [newUser]);
  res.redirect("/user");
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM usuario WHERE id = ?", [
    id,
  ]);
  res.render("users_edit", { user: result[0] });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;
  await pool.query("UPDATE usuario set ? WHERE id = ?", [newUser, id]);
  res.redirect("/user");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM usuario WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "User deleted" });
  }
  res.redirect("/user");
};

module.exports = {
  renderUsers,
  createUsers,
  editUser,
  updateUser,
  deleteUser
};