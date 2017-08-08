var express = require('express')

var app = express()

app.get('/', function(request, response){
	response.sendFile('./index.html', {root: './public'})
})
// app.get('/main.css', function(request, response){
// 	response.sendFile('./main.css', {root: './public'})
// })
app.use(express.static('public'))

// app.get('/main.js', function(request, response){
// 	response.sendFile('./main.js', {root: './public'})
// })
app.get('/newyork', function(request, response){
	response.sendFile('./newyork.html', {root: './public'})
})
app.get('/atlanta', function(request, response){
	response.sendFile('./atlanta.html', {root: './public'})
})
app.get('/miami', function(request, response){
	response.sendFile('./miami.html', {root: './public'})
})
app.get('/neworleans', function(request, response){
	response.sendFile('./neworleans.html', {root: './public'})
})
app.get('/boulder', function(request, response){
	response.sendFile('./boulder.html', {root: './public'})
})

// app.use(express.static())


app.listen(8000)