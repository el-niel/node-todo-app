const router = require('express').Router();
const {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    getSingleTodo,
} = require('../controller/todo');

router.route('/').get(getTodo).post(createTodo);

router.route('/:id').get(getSingleTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
