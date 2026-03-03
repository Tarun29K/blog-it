import express from "express";
const app = express();
const port = 3000;

//sets up direct usage of templates
app.set("view engine", "ejs")

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//custom-logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})