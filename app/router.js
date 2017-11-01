'use strict';

module.exports = app => {
    app.get('/api/v2/startTaskById/:id', app.controller.task.startTaskById);
};
