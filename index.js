const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//-------Mongoose Connect ----------
mongoose
  .connect(
    "mongodb+srv://imodclub:BlackShadow@cluster0.ok1dh.mongodb.net/stock?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .catch((error) => handleError(error));
mongoose.Promise = global.Promise;

//-------Mongoose End-------------

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const adminapi = require('./api/routers/adminapi');


app.use('/', adminapi);


app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server stated on port ${port}`));
