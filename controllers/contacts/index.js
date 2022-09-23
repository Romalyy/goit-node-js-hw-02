const addContact = require('./addContact');
const getContactById = require('./getContactById');
const getContactsList = require('./getContactsList');
const removeById = require('./removeById');
const updateById = require('./updateById');
const updateFavorite = require('./updateFavorite');

module.exports = {
  addContact,
  getContactById,
  getContactsList,
  removeById,
  updateById,
  updateFavorite,
};