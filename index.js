const express=require('express');
const app= express();
const port=3000;
 const mysql=require('mysql');
const connection=require(`./database/db`);

app.use(express.json());

app.get('/users',(reg,res)=>{
    const sql='select * from users';
    connection.query(sql,(err,result)=>{
        if(err)err;
        res.send(result);
    })
    
});

app.get('/users/:id',(reg,res)=>{
    const sql='select * from users where id =?';
    connection.query(sql,(err,result)=>{
        if(err)err;
        res.send(result);
    })
    
});


app.post('/users', (req, res) => {
    const user = req.body;
    const sql = 'insert into users set ?';
    connection.query(sql, user, (err, result) => {
        if (err) err;
        res.send('insert successful');
    });
});



app.delete('/users/:id', (req, res) => {
    const to = req.params.id;
    const sql = 'delete from users where id=?';
    connection.query(sql, to, (err, result) => {

        if (err) err;
        res.send('delete successfully');
    })
});






app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

});
