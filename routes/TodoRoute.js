const { Router } = require('express');
const { getTodo, saveTodo, updateTodo, deleteTodo, updateDone } = require('../controllers/TodoController');

const router = Router()

router.get('/', getTodo)
router.post('/submit', saveTodo)
router.put('/update', updateTodo)
router.put('/updateDone', updateDone)
router.post('/delete', deleteTodo)

module.exports = router;