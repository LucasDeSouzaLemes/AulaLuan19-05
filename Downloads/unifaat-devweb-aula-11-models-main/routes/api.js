import { Router } from 'express';
import ApiController from '../app/Controllers/ApiController.js';
import TodoApiController from '../app/Controllers/TodoApiController.js';
import ControladoresModel from '../app/Models/ColaboradoresModel.js';
import ControladoresApiController from '../app/Controllers/ColaboradoresApiController.js';
import ColaboradoresApiController from '../app/Controllers/ColaboradoresApiController.js';

export default (function () {

    const router = Router();

    router.get('/colaboradores', ColaboradoresApiController.list);

    router.get('/colaboradores/:id', ColaboradoresApiController.get);

    router.post('/colaboradores', ColaboradoresApiController.insert);

    return router;

})();