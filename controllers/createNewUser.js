const bcrypt = require('bcryptjs');
const db = require('../models/index');

const createNewUser = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        console.error('Error hashing password', err);
        res
          .status(500)
          .send({
            message: 'There was an error communicating with the database.',
          });
      } else {
        const newUser = await db.User.create({
          email: req.body.email,
          password: hash,
        });
        res.status(201).send({ message: 'Data was saved.', data: newUser });
      }
    });
  } catch (error) {
    console.error('Error creating new user:', error);
    res
      .status(500)
      .send({ message: 'There was an error communicating with the database.' });
  }
};

module.exports = createNewUser;
