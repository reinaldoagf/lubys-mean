const express= require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const {mongoose}= require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
//Routes
app.use(require('./routes/user.routes'));
app.listen(app.get('port'),()=>{
    console.log('Server run in port ' + app.get('port'));
})