import Post from "../database/models/Post.js";

export default function deletePost(req, res) {
  const { id } = req.params;
  console.log("ID: " + id);

  Post.destroy({
    where: {
      id
    }
  }).then(() => {
    console.log('Post deleted!');
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    res.redirect('/');
  });
}