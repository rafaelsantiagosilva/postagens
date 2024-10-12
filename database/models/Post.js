import db from '../db.js';

const Post = db.define('posts', {
  title: {
    type: db.Sequelize.STRING
  },
  content: {
    type: db.Sequelize.TEXT
  }
});

export default Post;