const express = require('express');
const Joi = require("joi");

const contacts = require('../../models/contacts');
const { RequestError } = require("../../helpers");

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
})

router.get('/:contactId', async (req, res, next) => {
  const result = await contacts.getContactById(contactId);
  if (!result) {
      throw RequestError(404, "Not found");
    }
  res.status(200).json(result);
})

router.post('/', async (req, res, next) => {
  const { error } = schema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required name field");
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json({ message: "Contact deleted" })
})

router.put('/:contactId', async (req, res, next) => {
  const { error } = schema.validate(req.body);
    const { contactId } = req.params;
    if (error) {
      throw RequestError(400, "missing fields");
    }
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.status(200).json(result);
})

module.exports = router
