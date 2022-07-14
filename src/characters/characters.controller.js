const charactersService = require('./characters.service');

const findAllCharacters = async (req, res) => {
    const allCharacters = await charactersService.findAllCharacters();

    if(allCharacters.length == 0){
        return res.status(206).send({ message: 'Não existe nenhum personagem cadastrado'});
    }
    res.send(allCharacters);
};

const findByIdCharacter = async (req, res) => {
    const id = req.params.id;
    const character = await charactersService.findByIdCharacter(id);

    if(!character) {
        return res.status(206).send({message: 'Personagem não encontrado com esse id!'});
    }
    res.send(character);
};

const createCharacter = async (req, res) =>{
    const character = req.body;

    if (!character) {
        res.status(400).send({
          message: "Você não digitou as informações do novo personagem!",
        });
      }

    const newCharacter = await charactersService.createCharacter(character);
    res.status(201).send(newCharacter);
};

const findByNameCharacter = async (req, res) => {
    const { name } = req.query;
  
    const characters = await charactersService.searchCharacter(name);
  
    if (characters.length === 0) {
      return res
        .status(400)
        .send({ message: "Não existe personagens cadastrados com esse nome!" });
    }
  
    res.send(characters);
  };

const updateCharacter = async (req, res) =>{
    const id = req.params.id;
    const editCharacter = req.body;

    const character = await charactersService.findByIdCharacter(id);

    if(!character) {
        return res.status(206).send({message: 'Personagem não encontrado com esse id!'});
    }

    const updateCharacter = await charactersService.updateCharacter(id, editCharacter);
    res.send(updateCharacter);
};

const deleteCharacter = async (req, res) => {
    const id = req.params.id;
    const character = await charactersService.findByIdCharacter(id);

    if (!character) {
        return res.status(206).send({message: 'Personagem não encontrado com esse id!'});
    }
    await charactersService.deleteCharacter(id);

    res.send({message: 'Personagem deletado!'});
    };

    module.exports = {
        findAllCharacters,
        findByIdCharacter,
        createCharacter,
        findByNameCharacter,
        updateCharacter,
        deleteCharacter,
    };
