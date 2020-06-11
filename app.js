const Express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = Express();

const port = 3001;

app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Escuchando al puerto ${port}`);
});
