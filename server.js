const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid')

const app = express();
const port = 8080;

let todos = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    const todo = req.body

    if (!todo.text) {
        res.status(404).send('text is required')
    }
    const todoToAdd = {
        text: todo.text,
        completed: false,
        id: uuid.v4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    todos.push(todoToAdd)
    res.json(todoToAdd)
});

app.get('/todo', (req, res) => {
    res.json(todos)
})

app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(item => item.id === id)
    if (!todo) {
        res.status(404).send(`Todo with id of ${id} not found`)
        return
    }
    res.json(todo)
})

app.put('/todo/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    todos = todos.map(item => {
        if (item.id === id) {
            return {
                ...item,
                ...updatedTodo,
                updatedAt: new Date().toISOString(),
            }
        }
        return item
    })
    res.json(todos.find(item => item.id === id))
})

app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(item => item.id !== id);
    res.send('Deleted successfully')
})

app.listen(port, () => console.log(`App listening on port ${port}!`));