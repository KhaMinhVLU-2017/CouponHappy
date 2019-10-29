const express = require('express')
const app = express()
const port = 9999
const route = require('./src/routes')
const mongoose = require('mongoose');
const {UriMongoDB} = require('./src/config')

mongoose.connect(UriMongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connect MongoDB complete..!')
});

app.use('/self-image',express.static('public/images'))
app.use('/self-video',express.static('public/videos'))

app.use('/api',route)

app.listen(port, () => console.log(`Server app listening on port ${port}!`))