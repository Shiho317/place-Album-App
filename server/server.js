const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true
}).then(() => console.log('mongoDB connected.'))
.catch(err => console.log(err));

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

app.listen(8888, () => {
  console.log('server connected successfully.')
});
