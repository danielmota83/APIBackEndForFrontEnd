const router = require('express').Router();
const charactersController = require('./characters.controller');
const authMiddleware = require('../auth/auth.middleware');

const {
    validId,
    validObjectBody,
  } = require('./characters.middleware');
  
  router.get('/', authMiddleware, charactersController.findAllCharacters);
  router.get('/find/:id', authMiddleware, validId, charactersController.findByIdCharacter);
  router.post('/create', authMiddleware, validObjectBody, charactersController.createCharacter);
  router.put(
    '/update/:id', authMiddleware,
    validId,
    validObjectBody,
    charactersController.updateCharacter,
  );
  router.get('/search', authMiddleware, charactersController.findByNameCharacter);
  router.delete('/delete/:id', authMiddleware, validId, charactersController.deleteCharacter);
  
  module.exports = router;