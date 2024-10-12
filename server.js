import express from 'express';
import { engine } from 'express-handlebars';
import router from './router.js';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3333;

app.use(express.static(path.join(process.cwd(), 'public')));

app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`> Server running on http://localhost:${PORT}`);
});