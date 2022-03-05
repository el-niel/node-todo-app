const Todo = require('../model/Todo');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../utils/asyncHandler');

exports.getTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.find();
    res.status(200).json({
        success: true,
        count: todo.length,
        todo,
    });
});

exports.createTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.create(req.body);
    if (!todo) {
        return next(
            new ErrorResponse(
                'Theres no resource with associated resource',
                404
            )
        );
    }
    res.status(200).json({
        success: true,
        todo,
    });
});

exports.updateTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id);
    if (!todo) {
        return next(
            new ErrorResponse(
                'Theres no resource with associated resource',
                404
            )
        );
    }

    res.status(200).json({
        success: true,
        todo,
    });
});

exports.getSingleTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return next(
            new ErrorResponse(
                'Theres no resource with associated resource',
                404
            )
        );
    }
    res.status(200).json({
        success: true,
        todo,
    });
});

exports.deleteTodo = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'deleting todo app',
    });
};
