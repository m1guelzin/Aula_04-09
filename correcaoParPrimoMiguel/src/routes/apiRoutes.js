//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const { Router } = require('express');
const controllerNumbers = require("../controllers/controllerNumbers");

router.post('/par/', controllerNumbers.checkPar);
router.post('/primo', controllerNumbers.checkPrimo)

module.exports = router
