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

let posts = [];
let currentID = 1;

app.get("/", (req, res) => {
    res.render("index", {posts });
})

app.get("/create", (req, res) => {
    res.render("create");
})

app.post("/posts", (req, res) => {
    const post = {
        id: currentID++,
        title: req.body.title,
        content: req.body.content,
        timestamp: new Date()
    };

    posts.push(post);
    console.log(posts);
    res.redirect("/");
    
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})