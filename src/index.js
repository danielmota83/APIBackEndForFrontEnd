const express =require('express');

const port = 3000

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});