const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

require('./db');

app.use(require('./routes/index'));

app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`)
});