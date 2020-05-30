const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// !using middleware
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {}; // each key has array of comments

app.get('/posts/:id/comments', (req, resp) => {
  resp.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, resp) => {
  // !generating random and unique commentId
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  // if value of commentsByPostId[req.params.id] --> undefined then return empty array
  let commentsArray = commentsByPostId[req.params.id] || [];

  commentsArray.push({ id: commentId, content });

  commentsByPostId[req.params.id] = commentsArray;

  resp.status(201).send(commentsArray);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
