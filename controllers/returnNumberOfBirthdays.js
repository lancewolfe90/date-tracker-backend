const { QueryTypes } = require('sequelize');
const db = require('../models/index');

const returnNumberOfBirthdays = async (req, res) => {
  try {
    const queryResponse = await db.sequelize.query(
      'SELECT COUNT(1) FROM birthdays',
      { type: QueryTypes.SELECT }
    );
    const numberOfBirthdays = +queryResponse[0].count;
    res
      .status(200)
      .send({ message: 'Data was retrieved.', data: numberOfBirthdays });
  } catch (error) {
    console.error('Error returning number of birthdays in table:', error);
    res
      .status(500)
      .send({ message: 'There was an error communicating with the database.' });
  }
};

module.exports = returnNumberOfBirthdays;
