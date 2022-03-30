const Project = require('../model/project');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../utils/asyncHandler');

exports.getProject = asyncHandler(async (req, res, next) => {
    const project = await Project.find().populate({
        path: 'Todo',
        select: 'name description',
    });
    if (!project) {
        return next(
            new ErrorResponse(
                'Theres no resource with associated resource',
                404
            )
        );
    }

    res.status(200).json({
        success: true,
        project,
    });
});

exports.createProject = asyncHandler(async (req, res, next) => {
    const project = await Project.create(req.body);
    if (!project) {
        return next(
            new ErrorResponse(
                'Theres no resource with associated resource',
                404
            )
        );
    }

    res.status(200).json({
        success: true,
        project,
    });
});
