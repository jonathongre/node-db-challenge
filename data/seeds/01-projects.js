
exports.seed = function(knex) {
  
  return knex('projects').truncate()
    .then(function () {
     
      return knex('projects').insert([
        {
          name: "Mop the floor",
          description: "Cleans the floor",
          completed: false
        },
        {
          name: "Paint the house",
          description: "Make you house look better",
          completed: true
        }
      ]);
    });
};
