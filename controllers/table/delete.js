const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName, id} = req.params;
  
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }

  return req.models[tableName]
    .findOne({where: {id}})
    .then(row => row.destroy())
    .then(() => res.sendStatus(STATUS_CODE.OK))
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};
