const express = require('express');
const app = express();
const port = 3000;
const connection = require('./database/db.js');
const mysql = require('mysql');
// const userRoute=require('./router/user');

// json method

app.use(express.json());

// get all users

app.get('/users', (req, res) => {
    const sql = 'select * from api';
    connection.query(sql, (err, result) => {
        if (err) err;
        res.send(result);
    })
});

// insert using post method


app.post('/users', (req, res) => {
    const user = req.body;
    const sql = 'insert into api set ?';
    connection.query(sql, user, (err, result) => {
        if (err) err;
        res.send('insert successful');
    });
});

// delete by id

app.delete('/users/:id', (req, res) => {
    const to = req.params.id;
    const sql = 'delete from api where id=?';
    connection.query(sql, to, (err, result) => {

        if (err) err;
        res.send('delete successfully');
    })
});

// get by id

app.get('/users/:id', (req, res) => {
    const ti = req.params.id;
    const sql = 'select * from api where id=? ';
    connection.query(sql, ti, (err, result) => {

        if (err) {
            res.send(err, 'record not fund');
        } else {
            res.send(result);
        }
    })
});
// update using put method
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body;
    const sql = 'update api set id= ?';
    connection.query(sql, [id, name], (err, result) => {
        if (err) err;
        res.send('update successful');
    });
});

// listen


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
