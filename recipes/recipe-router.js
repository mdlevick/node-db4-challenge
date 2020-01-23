const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get recipes, sorry! " });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getRecipeById(id)
    .then(recipe => {
      recipe
        ? res.status(200).json(recipe)
        : res
            .status(404)
            .json({ message: "Recipe with that ID does not exist." });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Failed to get recipe, sorry!" });
    });
});

module.exports = router;