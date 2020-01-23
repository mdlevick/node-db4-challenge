exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "eggs" },
        { name: "rice" },
        { name: "soy sauce" },
        { name: "pork" },
        { name: "guinness" },
        { name: "milk" },
        { name: "butter" }
      ]);
    });
};