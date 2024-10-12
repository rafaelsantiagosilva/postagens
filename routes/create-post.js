import Post from "../database/models/Post.js";

export default function createPost(req, res) {
  const { title, content } = req.body;

  Post.create({
    title, content
  }).then(() => {
    res.render('post-created');
  }).catch(err => {
    res.render('server-error', { error: err });
    console.error(err);
  }).finally(() => {
    res.redirect('/');
  });
}