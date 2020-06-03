import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'hediberto',
    'cavalcante',
    'silva',
    'teste']);
});

app.listen(3333);
