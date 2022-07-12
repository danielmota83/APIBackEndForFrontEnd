const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Ótima notícia, MongoDB conectado!");
    })
    .catch((error) =>
      console.log(`Tente novamente, erro ao conectar com o banco de dados: ${error}`)
    );
};

module.exports = connectToDatabase;