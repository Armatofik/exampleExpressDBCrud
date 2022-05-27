const router = require('express').Router();
const checkRole = require('../middlewares/@checkRole');
const roleNumber = require('../consts/roles');

const {
  select: selectController,
  delete: deleteController,
  update: updateController,
  insert: insertController
} = require('../controllers/table');

module.exports = router
  .get('/:tableName', checkRole(roleNumber.READER), selectController)
  .post('/:tableName', checkRole(roleNumber.OPERATOR), insertController)
  .delete('/:tableName', checkRole(roleNumber.ADMIN), deleteController)
  .put('/:tableName', checkRole(roleNumber.OPERATOR), updateController);