const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true},
});

CharacterSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

const Character = mongoose.model('Character', CharacterSchema, 'characters');

module.exports = Character;
