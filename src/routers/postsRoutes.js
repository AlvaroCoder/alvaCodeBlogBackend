const router = require('express').Router();
const PostController = require('../Controllers/postController');

const postControllerRoutes = PostController;

router.get('/', postControllerRoutes.run);
router.get('/exercise', postControllerRoutes.getPostsExercise);
router.get('/exercise/categories', postControllerRoutes.getPostsExerciseCategories);
router.get('/filter', postControllerRoutes.getPostsByCategorie);
router.get("/categories", postControllerRoutes.getCategories);
router.get('/top-blogs',postControllerRoutes.getTopPosts);
router.post('/id/:id',postControllerRoutes.getById);
router.put('/likes',postControllerRoutes.updateLikes);


module.exports = router;