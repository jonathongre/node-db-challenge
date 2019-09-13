const db = require('./dbConfig');

module.exports = {
    addResource,
    addProject,
    addTask,
    getResources,
    getProjects,
    getTasks
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return ids
    });
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return ids
    });
}

function addTask(task, project_id) {
    const newTask = {
        ...task,
        project_id: project_id
    }
    return db('tasks')
    .insert(newTask)
    .then(ids => {
        return ids
    });
}

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
    .then(data => {
        const updatedBoolArray = data.map(project => {
            if(project.completed){
                const updatedBool = {
                    ...project,
                    completed: true
                };
                return updatedBool;
            } else {
                const updatedBool = {
                    ...project,
                    completed: false
                };
                return updatedBool;
            }
        });
        return updatedBoolArray;
    })
}

function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
    't.task_id', 
    't.description', 
    't.notes', 
    't.completed as task_completed',
    'p.name as project_name',
    'p.description as project_description')
    .then(data => {
        const updatedBoolArray = data.map(task => {
            if(task.task_completed){
                const updatedBool = {
                    ...task,
                    task_completed: true
                };
                return updatedBool;
            } else {
                const updatedBool = {
                    ...task,
                    task_completed: false
                };
                return updatedBool;
            }
        });
        return updatedBoolArray;
    })
} 