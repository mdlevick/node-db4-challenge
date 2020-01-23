exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step_number: 1,
          instructions: "Whisk eggs in a bowl",
          recipe_id: 1
        },
        { step_number: 2, instructions: "Whisk in milk", recipe_id: 1 },
        {
          step_number: 3,
          instructions: "Cook slowly over medium heat",
          recipe_id: 1
        },
        {
          step_number: 1,
          instructions:
            "Start with cold rice and heat up a pan on medium-high heat with oil",
          recipe_id: 2
        },
        {
          step_number: 2,
          instructions: "Cook rice, stirring occasionally and adding soy sauce",
          recipe_id: 2
        },
        {
          step_number: 3,
          instructions: "If you're feeling fancy, add an egg and butter!",
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions:
            "Marinate pork in Guinness and soy sauce for 8-12 hours",
          recipe_id: 3
        },
        {
          step_number: 2,
          instructions: "Melt button in a pan at medium-high heat",
          recipe_id: 3
        },
        {
          step_number: 3,
          instructions: "Cook pork 6 minutes each side until medium inside.",
          recipe_id: 3
        }
      ]);
    });
};