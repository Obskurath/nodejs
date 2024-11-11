import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.status(200).send('Formacion Node + Express + MongoDB con Express')
});

export default app;