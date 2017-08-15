var express = require('express');
var router = express.Router();
var controller = require('../controllers/articleCont');

router.get('/', function(req, res, next) {
  res.send('alive!')
})

router.get('/:id', controller.findArticleById);
router.post('/', controller.postArticle);
router.delete('/:id', controller.removeArticle);

module.exports = router;
