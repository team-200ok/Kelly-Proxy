const newRelic = require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.options('*', cors())
app.use('/:id', express.static(path.join(__dirname, 'public')));
app.use('/api',
proxy({ target: 'http://ec2-13-52-217-0.us-west-1.compute.amazonaws.com/', changeOrigin: true }))

app.listen(port, () => console.log('Serving up fresh reviews on port', port));