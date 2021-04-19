import express from 'express';

const app = express();

app.listen(3333, () => console.log("Server está rodando"));

app.get('/', (request, response) => {
    return response.json(
        {
            data: "Olá NLW #5"
        }
    );
})


app.post('/users',(request, response) => {
    return response.json(
        {
            mensagem: "Usuario salvo com sucesso"
        }
    );
});