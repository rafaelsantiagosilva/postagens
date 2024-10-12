import { Router } from "express";
import registerForm from "./routes/register-form.js";
import createPost from "./routes/create-post.js";
import deletePost from "./routes/delete-post.js";
import readPosts from "./routes/read-posts.js";
import updateForm from "./routes/update-form.js";
import updatePost from "./routes/update-post.js";

const router = Router();
router.get('/', readPosts);
router.get('/register', registerForm);
router.post('/add', createPost);
router.get('/delete/:id', deletePost);
router.get('/update/:id', updateForm)
router.post('/update/:id', updatePost);

export default router;