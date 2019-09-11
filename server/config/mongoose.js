const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/js2',
{ useNewUrlParser: true, useFindAndModify: false })

var fs = require('fs');

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') > -1){
        require(modelsPath + '/' + file);
    }
})
