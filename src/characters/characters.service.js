const Character = require('./character');

const createCharacter = async (body) => await Character.create(body);

const findAllCharacters = async () => await Character.find();

const findByIdCharacter = async (userId) => await Character.findById(userId);

module.exports = {
    createCharacter,
    findAllCharacters,
    findByIdCharacter
};