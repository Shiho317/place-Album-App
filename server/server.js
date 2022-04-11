const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins');
const cors = require('cors');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('mongoDB connected.'))
.catch(err => console.log(err));

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);
app.use(cors());

app.listen(8888, () => {
  console.log('server connected successfully.')
});
