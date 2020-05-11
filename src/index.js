const express = require('express');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/productos'));
//starting the server
app.listen(app.get('port'), () => {
    console.log('server 3000',app.get('port'));
});