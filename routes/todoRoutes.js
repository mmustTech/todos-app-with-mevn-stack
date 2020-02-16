const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todoController');

router
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.createTodo);

router
    .route('/:TodoId')
    .get(todoController.getTodo)
    .patch(todoController.updateTodo)
    .delete(todoController.deleteTodo);



module.exports = router;