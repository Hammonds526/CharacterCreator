const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/login").post(usersController.login);
router.route("/logout").get(usersController.logout);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/:id/characters")
  .get(usersController.characterList);

module.exports = router;
