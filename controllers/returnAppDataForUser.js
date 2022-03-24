const db = require('../models/index');

const returnAppDataForUser = async (req, res) => {
  try {
    const foundAppData = await db.Birthday.findAll({
      where: { userId: req.params.userId },
    });
    if (!foundAppData) {
      res
        .status(404)
        .send({ message: 'The specified data could not be located.' });
    } else {
      res
        .status(200)
        .send({ message: 'Data was retrieved.', data: foundAppData });
    }
  } catch (error) {
    console.error('Error retrieving app data:', error);
    res
      .status(500)
      .send({ message: 'There was an error communicating with the database.' });
  }
};

module.exports = returnAppDataForUser;
