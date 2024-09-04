//Importa o módulo Router do express
//router sera utilizado para definir rotas especificas da aplicação
const router = require('express').Router();


//Importa a controller de profesores onde contem a logica relacionada a professores
const controllerNumbers = require('../controllers/controllerNumbers');

///Rota POST para '/teacher'
router.post('/par/',controllerNumbers.postPar); 
router.post('/primo/',controllerNumbers.postPrimo); 
router.get('/teacher/', controllerNumbers.getNumbers);

module.exports = router
