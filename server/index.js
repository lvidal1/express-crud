const express = require('express');

const app = express();

const userRouter = require("./routes/user.routes");

app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hi" });
})

app.get('/candidates', (req, res) => {
    res.status(200).json({ candidates: [1, 2, 3, 4] });
})

app.get('/countries', (req, res) => {
    res.status(200).json({ countries: ["Peru", "USA"] });
})

app.get('/cellphone-brand', (req, res) => {
    res.status(301).json({ brands: ["xiaomi", "samsung"] });
})

app.get('/stack', (req, res) => {
    res.status(200).json({ stack: ["js", "ruby"] });
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})


// Database

const mongoose = require('mongoose');

const db = mongoose.connect("mongodb+srv://root:z5lcBTFthHZiDsGn@products.fvdt9jr.mongodb.net/scrapped_products?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log("Connected to the database...");
    return response;
})

