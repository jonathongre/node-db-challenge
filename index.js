const server = require('./server');

const projectRouter = require('./routers/projecRouter');
const resourceRouter = require('./routers/resourceRouteer');
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 