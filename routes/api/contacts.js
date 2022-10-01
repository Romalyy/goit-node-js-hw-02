const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');

const { validateContactBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', authenticate, ctrl.getContactsList);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post(
  '/',
  authenticate,
  validateContactBody(schemas.contactAddSchema),
  ctrl.addContact
);

router.delete('/:id', authenticate, isValidId, ctrl.removeById);

router.put(
  '/:id',
  authenticate,
  isValidId,
  validateContactBody(schemas.contactAddSchema),
  ctrl.updateById
);
router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  validateContactBody(schemas.updFavorContactSchema),
  ctrl.updFavorContact
);

module.exports = router;