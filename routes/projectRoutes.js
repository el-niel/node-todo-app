const router = require('express').Router();
const { getProject, createProject } = require('../controller/project');

router.route('/').get(getProject).post(createProject);

module.exports = router;
