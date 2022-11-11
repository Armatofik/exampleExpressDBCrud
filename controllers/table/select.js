const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName} = req.params;
  
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }

  return req.models[tableName]
    .findAll()
    .then(rows => res.send(rows))
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};
