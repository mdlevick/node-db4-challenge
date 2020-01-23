exports.up = function(knex) {
    return knex.schema
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl
          .string("description", 512)
          .notNullable()
          .unique();
      })
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
      })
      .createTable("instructions", tbl => {
        tbl.increments();
        tbl.integer("step_number").notNullable();
        tbl.string("instructions", 512).notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("recipe_ingredients", tbl => {
        tbl.primary(["recipe_id", "ingredient_id"]);
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl.float("quantity").notNullable();
        tbl.string("measurement", 255).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("instructions")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes");
  };