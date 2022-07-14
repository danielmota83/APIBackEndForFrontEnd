const Character = require('./character');

const findAllCharacters = async () => {
    const allCharacters = await Character.find();
    return allCharacters;
  };
  
  const findByIdCharacter = async (idParam) => {
    return await Character.findById(idParam);
  };

  const findByNameCharacter = async (name) =>
  await Character.find({ name: { $regex: `${name || ''}`, $options: 'i' } });
  
  const createCharacter = async (newCharacter) =>
    await Character.create(newCharacter);
  
  const updateCharacter = async (idParam, editCharacter) => {
    return await Character.findByIdAndUpdate(idParam, editCharacter).setOptions({
      returnOriginal: false,
    });
  };
  
  const deleteCharacter = async (idParam) =>
    await Character.findByIdAndDelete(idParam);
  
  module.exports = {
    findAllCharacters,
    findByIdCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    findByNameCharacter,
  };