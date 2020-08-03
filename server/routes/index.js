const usersController = require('../controllers').users;
const imagesController = require('../controllers').images;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));

  app.post('/api/users', usersController.create);
  

  app.post('/api/images', imagesController.create);
  
  
};
