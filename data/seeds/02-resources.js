exports.seed = function(knex) {
 
  return knex('resources').truncate()
    .then(function () {
      
      return knex('resources').insert([
        {
          name: "Internet"
        },
        {
          name: "Books",
          description: "Go to the library"
        },
        {
          name: "Mom",
          description: "Ask your mother"
        },
        {
          name: "Friends",
          description: "They might know"
        }
      ]);
    });
};
