const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/contacts");
const { validateBody, isValidId, authenticate, upload } = require("../../middlewares");

const ctrlCont = require("../../controllers/contacts");

// const {
//   getAll,
//   getById,
//   addCont,
//   deleteById,
//   updateById,
//   updateContactStatus,
// } = require("../../controllers/contactsControl");

router.get("/", authenticate, ctrlCont.getAll);

router.get("/:contactId", authenticate, isValidId, ctrlCont.getById);

router.post("/", authenticate, upload.single("avatar"), validateBody(schemas.addSchema), ctrlCont.addCont);

router.delete("/:contactId", authenticate, isValidId, ctrlCont.deleteById);

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addSchema), ctrlCont.updateById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlCont.updateContactStatus
);

module.exports = router;
