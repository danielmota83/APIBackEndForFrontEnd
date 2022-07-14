const router = require('express').Router();
const charactersController = require('./characters.controller');


const {
    validId,
    validObjectBody,
  } = require('./characters.middleware');
  
  router.get('/', charactersController.findAllCharacters);
  router.get('/find/:id', validId, charactersController.findByIdCharacter);
  router.post('/create', validObjectBody, charactersController.createCharacter);
  router.put(
    '/update/:id',
    validId,
    validObjectBody,
    charactersController.updateCharacter,
  );
  router.get('/search', validObjectBody, characterController.findByNameCharacter);
  router.delete('/delete/:id', validId, charactersController.deleteCharacter);
  
  module.exports = router;