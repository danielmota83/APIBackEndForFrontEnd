const router = require('express').Router();
const charactersController = require('./characters.controller');


const {
    validId,
    validObjectBody,
  } = require('../middlewares/characters.middleware');
  
  router.get('/', charactersController.findAllCharacters);
  router.get('/:id', validId, charactersController.findByIdCharacter);
  router.post('/', validObjectBody, charactersController.createCharacter);
  router.put(
    '/:id',
    validId,
    validObjectBody,
    charactersController.updateCharacter,
  );
  router.delete('/:id', validId, charactersController.deleteCharacter);
  
  module.exports = router;