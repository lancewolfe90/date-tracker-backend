// require('dotenv').config(); // Must be commented out before deploying

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/users', require('./routes/userRouter'));
app.use('/app-data', require('./routes/appDataRouter'));

app.get('/', (req, res) =>
  res.status(200).send("This is a personal app's backend server.")
);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
