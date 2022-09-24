const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');

const { validateContactBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', ctrl.getContactsList);

router.get('/:id', isValidId, ctrl.getContactById);

router.post(
  '/',
  validateContactBody(schemas.contactAddSchema),
  ctrl.addContact
);

router.delete('/:id', isValidId, ctrl.removeById);

router.put(
  '/:id',
  isValidId,
  validateContactBody(schemas.contactAddSchema),
  ctrl.updateById
);
router.patch(
  '/:id/favorite',
  isValidId,
  validateContactBody(schemas.updFavorContactSchema),
  ctrl.updFavorContact
);

module.exports = router;