const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM productos', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    }
    )
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM productos WHERE codigo = ?', [id],(err,rows,fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    } )
});

router.get('/clientes/:usuario',(req,res)=>{
    const{usuario} = req.params;
    mysqlConnection.query('SELECT * FROM clientes WHERE codBridge = ?', [usuario],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
module.exports = router;    