const express = require('express');
const router = express.Router();
const { schemas } = require("../../models/contacts");
const { validateBody, isValidId } = require("../../middleware");

const {
  getAll,
  getById,
  addCont,
  deleteById,
  updateById,
  updateContactStatus,
} = require("../../controllers/contactsControl");

router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', validateBody(schemas.addSchema), addCont);

router.delete('/:contactId', isValidId, deleteById);

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), updateById);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), updateContactStatus);

module.exports = router;