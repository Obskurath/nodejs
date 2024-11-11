import express from "express";
const app = express();
app.use(express.json());

const actualBooks = [
    {
        id: 1,
        title: "El Señor de Los Anillos",
    },
    {
        id: 2,
        title: "El Hobbit",
    },
    {
        id: 3,
        title: "Los Pilares de la Tierra",
    },
    {
        id: 4,
        title: "El Código Da Vinci",
    },
];

const searchBook = (id) => {
    return actualBooks.findIndex((book) => book.id === Number(id));
};

app.get("/", (req, res) => {
    res.status(200).send("Formacion Node + Express + MongoDB con Express");
});

app.get("/books", (req, res) => {
    res.status(200).json(actualBooks);
});

app.get("/books/:id", (req, res) => {
    const index = searchBook(Number(req.params.id));
    res.status(200).json(actualBooks[index]);
});

//Create books
app.post("/books", (req, res) => {
    actualBooks.push(req.body);
    res.status(201).send("El libro esta puesto correctamente");
});

app.patch("/books:id", (req, res) => {
    const index = searchBook(Number(req.params.id));
    actualBooks[index].title = req.body.title;
    res.status(200).json(actualBooks)
})


export default app;
