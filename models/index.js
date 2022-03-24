const { Sequelize } = require('sequelize');

const db = {};

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
db.sequelize = sequelize;

db.Birthday = require('./Birthday')(sequelize);
db.User = require('./User')(sequelize);

db.Birthday.belongsTo(db.User);
db.User.hasMany(db.Birthday);

sequelize
  .sync(/* { force: true } */)
  .then(() => {
    console.log('Sequelize synced');
  })
  .catch(error => console.error('Sequelize error:', error));

module.exports = db;
