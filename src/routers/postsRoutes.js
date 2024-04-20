const router = require('express').Router();
const PostController = require('../Controllers/postController');

const postControllerRoutes = PostController;

router.post('/', postControllerRoutes.run);
router.post('/id/:id',postControllerRoutes.getById);
router.put('/likes',postControllerRoutes.updateLikes);
router.get("/categories", postControllerRoutes.getCategories)

module.exports = router;