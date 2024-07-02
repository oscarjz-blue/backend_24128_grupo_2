//configuracion de las rutass
import { Router} from "express";
import pool from "../database.js";

const router = Router();

// para agregar
router.get('/add',(req,res)=>{
    res.render('personas/add'); //para renderizar el archivo add dentro de personas
});
router.post('/add', async(req,res)=>{  //aqui estaremos enviando los datos 
    try{
        const {name, surname, email, password, role, active}= req.body; //traigo del req.body
        const newPersona = {
            name, surname, email, password, role, active
        }
        await pool.query('INSERT INTO usuario SET ?',[newPersona]);
        res.redirect('/list'); //para que me redirecciones al listado y poder visualizar si se cargo 
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//para el listado 
router.get('/list', async(req, res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM usuario');
        res.render('personas/list',{usuario:result}); // para renderizar el arhivo list dentro de la carpeta persona concateno con el objeto persona que defini en list y va a recibir todo lo que viene en result
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});


// para editar 
 router.get('/edit/:id',async(req, res)=>{
    try{
        const{id} =req.params;
        const[persona] = await pool.query('SELECT * FROM usuario WHERE id = ?',[id]);
        const personaEdit =  persona[0];
        res.render('personas/edit', {usuario: personaEdit});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

 });
//para enviar por metodo post y se visualice en la lista 
 router.post('/edit/:id',async(req, res)=>{
    try{
        const {name, surname, email, password, role, active} = req.body;
        const {id} = req.params;
        const editPersona = {name, surname, email, password, role, active};
        await pool.query('UPDATE usuario SET ? WHERE id = ?',[editPersona, id]);
        res.redirect('/list');

    }
    catch(err){
        res.status(500).json({message:err.message});
    }

 });

 //para el eliminar 
 router.get('/delete/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

 });

export default router;
//final