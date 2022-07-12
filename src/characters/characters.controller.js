const characterService = require('./characters.service');

const createCharacter = async (req, res) => {
    const {name, imageUrl} = req.body;

    if(!name || !imageUrl) {
        return res.status(400).send({message: 'Os campos name e imageUrl são de preenchimento obrigatório!'});
    }

    const character = await characterService.createCharacter(req.body).catch((error) =>console.log(error));

    if(!character){
        return res.status(500).send({message: 'Erro ao cadastrar persangem. Tente novamento mais tarde'});
    }
    res.status(201).send(character);
};

const findAllCharacters = async(req, res) =>{
    const characters = await characterService.findAllCharacters();

    if(characters.length == 0) {
        return res.status(206).send({massage: 'Não existem personagens cadastrados!'})
    };

    res.send(characters)
};

module.exports = {
    createCharacter,
    findAllCharacters
};