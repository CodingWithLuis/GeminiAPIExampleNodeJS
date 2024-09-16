import express from "express";
import generateContent from './routes/gemini.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

app.get("/gemini", generateContent);

app.listen(3000, () => {
    console.log("Escuchando puerto 3000");
})
