const db = require('../models/index');

const createNewUserAppData = (req, res) => {
  // Insertion function
  const insertIntoDb = async birthday => {
    try {
      await db.Birthday.create(birthday);
    } catch (error) {
      console.error('Error creating new app data:', error);
      res.status(500).send({
        message: 'There was an error communicating with the database.',
      });
    }
  };

  if (req.body.data && req.body.data instanceof Array) {
    req.body.data.forEach(birthday => {
      insertIntoDb(birthday);
    });
  } else {
    if (req.body.notes) {
      insertIntoDb({
        name: req.body.name,
        date: req.body.date,
        notes: req.body.notes,
        userId: req.body.userId,
      });
    } else {
      insertIntoDb({
        name: req.body.name,
        date: req.body.date,
        userId: req.body.userId,
      });
    }
  }
  res.status(201).send({ message: 'The data was successfully stored.' });

  /* try {
    // Might be better to create with un-nullable fields and then update
    let newBirthday;
    if (req.body.notes) {
      newBirthday = await db.Birthday.create({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        notes: req.body.notes,
        userId: req.body.userId,
      });
    } else {
      newBirthday = await db.Birthday.create({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        userId: req.body.userId,
      });
    }
    res.status(201).send(newBirthday);
  } catch (error) {
    console.error('Error creating new app data:', error);
    res.status(500).send('There was an error communicating with the database.');
  }
   */
};

module.exports = createNewUserAppData;
