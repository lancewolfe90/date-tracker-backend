module.exports = (req, res, next) => {
  if (/^[0-9]+$/.test(req.params.userId)) {
    next();
  } else {
    res
      .status(401)
      .send({ message: 'Not allowed unless a valid user id is specified.' });
  }
};
