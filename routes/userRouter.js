const express = require('express');
// const authMiddleware = require('../auth/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(400)
    .send({ message: 'You must specify a user to retrieve specific data.' });
});

router.post('/', require('../controllers/createNewUser'));

module.exports = router;
