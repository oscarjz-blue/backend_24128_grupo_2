const db = require('../db/db.js');

const getAllUser = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            res.status(500).json({ error: 'Error al obtener usuarios' });
            return;
        }
        res.json(results);
    });
};

const getByIdUser = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuario WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener usuario:', err);
            res.status(500).json({ error: 'Error al obtener usuario' });
            return;
        }
        res.json(results);
    });
};

const createUser = (req, res) => {
    const { name, surname, email, password } = req.body;
    //const image = req.file ? req.file.path : null; // Asegúrate de que la variable image esté definida
    const sql = 'INSERT INTO usuario (name, surname, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, surname, email, password], (err, results) => {
        if (err) {
            console.error('Error al crear usuario:', err);
            res.status(500).json({ error: 'Error al crear usuario' });
            return;
        }
        res.json({ message: 'Usuario created', usuarioId: results.insertId });
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, surname, email, password } = req.body;
    //const image = req.file ? req.file.path : null; // Asegúrate de que la variable image esté definida
    const sql = 'UPDATE usuario SET name = ?, surname = ?, email = ?, password = ? WHERE id = ? AND role <> "ADMIN"';
    db.query(sql, [name, surname, email, password, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).json({ error: 'Error al actualizar usuario' });
            return;
        }
        res.json({ message: 'Usuario updated' });
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuario WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.status(500).json({ error: 'Error al eliminar usuario' });
            return;
        }
        res.json({ message: 'Usuario deleted' });
    });
};

module.exports = {
    getAllUser,
    getByIdUser,
    createUser,
    updateUser,
    deleteUser
};
