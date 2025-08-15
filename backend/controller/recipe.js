const Recipes = require("../models/recipe");

const getRecipes = async (req, res) => {
   const recipes = await Recipes.find();
   return res.json(recipes);
};

const getRecipe = async (req, res) => {
   const recipe = await Recipes.findById(req.params.id);
   return res.json(recipe);
};

const addRecipe = async (req, res) => {
   const {title, ingredients, instructions, time, coverImage} = req.body;

   if (!title || !ingredients || !instructions) {
      res.json({message: "Required fields can't be empty"})
   }

   const newRecipe = await Recipes.create({
      title, ingredients, instructions, time, coverImage
   });

   return res.json(newRecipe);
};

const editRecipe = async (req, res) => {
   const {title, ingredients, instructions, time, coverImage} = req.body;
   const recipe = await Recipes.findById(req.params.id);
   try {
      if (recipe) {
         await Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true});
         res.json({title, ingredients, instructions, time, coverImage});
      }
   }
   catch(err) {
      return res.status(404).json({message: 'error'});
   }
  
};

const deleteRecipe = (req, res) => {
   res.json({message: 'hello 1'})
};


module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe};