import Post from "../database/models/Post.js";

export default function updatePost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  Post.update({ title, content }, {
    where: {
      id
    }
  }).then(() => {
    console.log('Post updated!');
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    res.redirect('/');
  });
}