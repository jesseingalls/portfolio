const usersController = require('./../controllers/users');
const path = require('path');

module.exports = (app) => {
    app.get('/api/users', usersController.allUsers);
    app.post('/api/users', usersController.addUser);
    // app.put('/api/products/:id', productsController.editProduct);
    // app.get('/api/products/:id', productsController.singleProduct);
    app.delete('/api/users/:id', usersController.deleteUser);

    // app.post('/api/rides/:id/passenger', rideController.addPassenger);
    // app.delete('/api/rides/:r_id/passenger/:p_id', rideController.removePassenger);

    // app.all('*', (req,res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
}
