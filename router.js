import { Router } from "express";
import registerForm from "./routes/register-form.js";
import createPost from "./routes/create-post.js";
import deletePost from "./routes/delete-post.js";
import readPosts from "./routes/read-posts.js";

const router = Router();
router.get('/', readPosts);
router.get('/register', registerForm);
router.post('/add', createPost);
router.get('/delete/:id', deletePost);

export default router;