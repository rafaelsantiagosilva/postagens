import Post from "../database/models/Post.js";

export default async function home(req, res) {
  Post.findAll().then((posts) => {
    res.render('home', { posts: posts.map(post => post.dataValues) });
  }).catch((err) => {
    console.error(err);
  });;
}