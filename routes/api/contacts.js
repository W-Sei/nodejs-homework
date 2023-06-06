const express = require('express');
const router = express.Router();
const { schemas } = require("../../models/contacts");
const { validateBody, isValidId } = require("../../middlewares");

const contactController = require("../../controllers");

// const {
//   getAll,
//   getById,
//   addCont,
//   deleteById,
//   updateById,
//   updateContactStatus,
// } = require("../../controllers/contactsControl");

router.get('/', contactController.getAll);

router.get('/:contactId', isValidId, contactController.getById);

router.post('/', validateBody(schemas.addSchema), contactController.addCont);

router.delete('/:contactId', isValidId, contactController.deleteById);

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), contactController.updateById);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), contactController.updateContactStatus);

module.exports = router;