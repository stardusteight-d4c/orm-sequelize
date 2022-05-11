const {Router} = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .get('/turmas/matriculas/lotadas', TurmaController.pegaTurmasLotadas)
    .post('/turmas', TurmaController.criaTurma)
    .put('/turmas/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.apagaTurma)
module.exports = router;
