var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.set('views', 'src/views');

app.get('/', function(request, response){
    response.render('index')
});

app.use(express.static('src/public'));
 

app.listen(3000, function(){
    console.log('servidor rodando na porta 3000');
});
