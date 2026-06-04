const express = require('express');
const router = express.Router();
const db = require('../database/db');

//GET
router.get('/', (req, res) => {
    const proyectos = db.prepare('SELECT * FROM proyectos').all();
    res.json(proyectos);
});

//GET by ID
router.get('/:id', (req, res) => {
    const proyecto = db.prepare('SELECT * FROM proyectos WHERE id = ?').get(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(proyecto);
});

//POST
router.post('/', (req, res) => {
    const { titulo, descripcion, url, imagen } = req.body;
    const resultado  = db.prepare(`
        INSERT INTO proyectos (titulo, descripcion, url, imagen)
        VALUES (?, ?, ?, ?)
        `).run(titulo, descripcion, url, imagen);
        res.status(201).json({ id: resultado.lastInsertRowid })
    });

//PUT
router.put('/:id', (req, res) => {
    const {titulo, descripcion, url, imagen} = req.body;
    db.prepare(`
        UPDATE proyectos SET titulo = ?, descripcion = ? , url = ?, imagen = ? WHERE id = ?`
    ).run(titulo, descripcion, url, imagen, req.params.id);
    res.json({ message: 'Proyecto actualizado' });
});

//DELETE
router.delete('/:id', (req, res) => {
    db.prepare('DELETE FROM proyectos WHERE id = ?').run(req.params.id);
    res.json({ message: 'Proyecto eliminado' });
});

module.exports = router;