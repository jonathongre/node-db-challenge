exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: "Get a bucket",
          notes: "Not too big",
          completed: true,
          project_id: 1
        },
        {
          description: "Fill with water",
          completed: true,
          project_id: 1
        },
        {
          description: "Put some soap/bleach in bucket",
          completed: true,
          project_id: 1
        },
        {
          description: "Get mop wet",
          completed: false,
          project_id: 1
        },
        {
          description: "Clean floor",
          completed: false,
          project_id: 1
        },
        {
          description: "Open paint can",
          notes: "Use a screwdriver",
          completed: true,
          project_id: 2
        },
        {
          description: "Dip brush in paint",
          notes: "Not too much",
          completed: true,
          project_id: 2
        },
        {
          description: "Paint house",
          notes: "Be careful",
          completed: true,
          project_id: 2
        }
      ]);
    });
};
