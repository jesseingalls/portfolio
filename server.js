const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/mongoose')

require('./server/config/routes')(app);

app.all('*', (req,res) => res.sendFile
(__dirname + '/src/index.html'));

app.get('/', (req, res) =>{
    res.json('working')
})

app.listen(8000, () => console.log("on 8000"));
