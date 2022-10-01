const express = require('express')
const expressHandlebars = require('express-handlebars')


const app = express()

app.engine('hbs', expressHandlebars.engine({
    defaultLayout: 'main.hbs',
}))

app.use(
    express.static('public')
)

app.get('/', function(request, response){
    response.render('start.hbs')

})
///// this fun send data from css file old version. 
// app.get('/style.css', function(request, response){
    // response.sendFile('views/style.css')
// })

app.use(
    express.static('/public/style.css')
)
app.listen(8080)