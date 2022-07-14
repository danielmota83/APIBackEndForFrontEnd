const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const Character = req.body;

  if (!Character || !Character.name || !Character.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do Personagem!' });
  }

  next();
};

module.exports = { validId, validObjectBody };
