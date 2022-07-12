const express =require('express');

const port = process.env.PORT || 3000;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/characters', characterRoute);
app.use("/api-docs", swaggerRoute);

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});