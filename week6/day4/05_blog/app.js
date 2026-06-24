const express = require('express');
const app = express();
const blogs = require('./data.js');

app.listen(3000, () => {
  console.log('port 3000');
});

app.get('/api/posts/', (req, res) => {
  res.json(blogs);
});

app.get('/api/posts/:postID', (req, res) => {
  const id = Number(req.params.postID);
  const blog = blogs.find((post) => post.id === id);

  if (!blog) {
    return res.status(404).send('post not found');
  }

  res.json(blog);
});

app.get('/api', (req, res) => {
  const search = req.query.search.toLowerCase();
  const blog_results = blogs.filter((post) =>
    post.title.toLowerCase().includes(search)
  );

  if (blog_results.length < 1) {
    return res.status(200).send('No blog post matched your search');
  }

  res.json(blog_results);
});
