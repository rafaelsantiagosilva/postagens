import Post from "../database/models/Post.js";

export default async function updateForm(req, res) {
  const { id } = req.params;
  const post = await Post.findByPk(id).then((post) => post.dataValues);
  res.render('update-form', { id, post });
}