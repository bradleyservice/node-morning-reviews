const express = require('express');
const app = express();
const port = 4338;
const users = require('../users.json')

app.use(express.json());

app.get('/api/users', (req, res) => {
    res.status(200).send(users)
});

app.get('/api/users/:id', (req, res) => {
    const {id} = req.params;
    if(!id){
        return res.status(404).send('Unable to find resource')
    }
    const foundUser = users.find(val => val.id === +id)
    if(!foundUser){
        res.status(500).send('Unable to find user')
    }
    res.status(200).send(foundUser)
})
// // params
// app.post('/api/users/:name', (req, res) => {
//     const {name} = req.params;
// });
// // query
// app.post('/api/users', (req, res) => {
//     const {name} = req.query;
// });
// // body
// app.post('/api/users', (req, res) => {
//     const {name} = req.body;
// });

app.listen(port, () => {
    console.log(`server is running on ${port}`)
});