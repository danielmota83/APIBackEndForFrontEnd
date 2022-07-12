const router = require('express').Router();
const charactersController = require('./characters.controller');

router.post('/', charactersController.createCharacter)

module.exports = router