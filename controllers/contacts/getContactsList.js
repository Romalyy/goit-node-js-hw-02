const { Contact } = require('../../models/contact');

const getContactsList = async (_, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, '-createdAt -updatedAt', {skip, limit})
                              .populate("owner")
  res.json(result);
};

module.exports = getContactsList;