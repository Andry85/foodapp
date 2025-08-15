const express= require("express");
const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipe");
const router = express.Router();

router.get('/', getRecipes) // GET all recipes
router.get('/:id', getRecipe) // GET all recipe by id
router.post('/', addRecipe) // add a recipe
router.put('/:id', editRecipe) // edit the recipe
router.delete('/:id', deleteRecipe) // delete the recipe

module.exports = router;