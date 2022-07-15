const charactersService = require('./characters.service');

const findAllCharacters = async (req, res) => {
   try{
    const allCharacters = await charactersService.findAllCharacters();
   return res.send({
        results: allCharacters.map((character)=> ({
            id:character._id,
            user:character.user.id,
            name:character.name,
            imageUrl:character.imageUrl,
        }))
    });
} catch (err) {
    res.status(500).send({message: err.message})
}
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
      try {
        const { name, imageUrl } = req.body;
    
        const { id } = await createCharacter(name, imageUrl, req.userId);
    
        res.status(201).send({
          message: 'created',
          character: { id, name, imageUrl },
        });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
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
