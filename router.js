import { Router } from "express";
import home from "./routes/home.js";
import registerForm from "./routes/register-form.js";
import createPost from "./routes/create-post.js";
import deletePost from "./routes/delete-post.js";

const router = Router();
router.get('/', home);
router.get('/register', registerForm);
router.post('/add', createPost);
router.get('/delete/:id', deletePost);

export default router;