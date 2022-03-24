const express = require('express');
const authMiddleware = require('../auth/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(400)
    .send({ message: 'You must specify a user to retrieve specific data.' });
});

router.get(
  '/number-of-rows',
  require('../controllers/returnNumberOfBirthdays')
);

router.post('/', require('../controllers/createNewUserAppData'));

router.get(
  '/:userId',
  authMiddleware,
  require('../controllers/returnAppDataForUser')
);

module.exports = router;
