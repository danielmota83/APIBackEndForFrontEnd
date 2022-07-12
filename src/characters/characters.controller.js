const characterService = require('./characters.service');

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
    const newCharacter = await charactersService.createCharacter(character);

    res.status(201).send(newCharacter);
};

const updateCharacter = async (req, res) =>{
    const id = req.params.id;
    const editCharacter = req.body;

    const character = await charactersService.findByIdCharacter(id);

    if(!character) {
        return res.status(206).send({message: 'Personagem não encontrado com esse id!'});
    }

    const updateCharacter = await charactersService.updateCharacter(id, editCharacter);
    res.send(updatePharacter);
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
        updateCharacter,
        deleteCharacter,
    };
