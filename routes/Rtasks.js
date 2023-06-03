const express = require('express')
const router = express.Router();
const {getAllTasks} = require('../controllers/Ctasks')

router.route('/').get(getAllTasks);

module.exports = router