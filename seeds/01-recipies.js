exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Scrambled Eggs",
          description: "A great way to start the morning!"
        },
        { name: "Fried Rice", description: "Easier than most think." },
        { name: "Grandma's Pork", description: "Famous Recipe, or something." }
      ]);
    });
};