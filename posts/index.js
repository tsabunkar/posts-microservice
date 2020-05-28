const express = require('express');
// built-in libr --> crypto
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');

const app = express();

// !using middleware
app.use(bodyParser.json());

const posts = {}; // { '23he9j': {id: '23he9j', title: 'first Posts'}, .....}

app.get('/posts', (req, resp) => {
  resp.send(posts);
});

app.post('/posts', (req, resp) => {
  // !generating random and unique userId
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  console.log(title);
  posts[id] = {
    id,
    title,
  };
  console.log('Response', posts);
  resp.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
