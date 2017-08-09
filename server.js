var express = require('express')

var app = express()

app.get('/', function(request, response){
	response.sendFile('./index.html', {root: './public/html'})
})

app.use(express.static('public'))

app.get('/newyork', function(request, response){
	response.sendFile('./newyork.html', {root: './public/html'})
})
app.get('/atlanta', function(request, response){
	response.sendFile('./atlanta.html', {root: './public/html'})
})
app.get('/miami', function(request, response){
	response.sendFile('./miami.html', {root: './public/html'})
})
app.get('/neworleans', function(request, response){
	response.sendFile('./neworleans.html', {root: './public/html'})
})
app.get('/boulder', function(request, response){
	response.sendFile('./boulder.html', {root: './public/html'})
})

app.listen(8000)