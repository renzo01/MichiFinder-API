const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = Express();

const port = 3001;

const publicPath = path.resolve(__dirname, './public');

app.use(Express.static(publicPath));

app.set('port', process.env.PORT || port);
app.use(Express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Escuchando al puerto ${port}`);
});
