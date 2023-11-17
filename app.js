const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001
const publicPath = path.resolve(__dirname, "public")


app.use(express.static(publicPath))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"))
})

app.get('*', (req, res) => {
    res.send(`
    <div>
       <h1>Esta página no existe</h1>
       <a href="/">Volver al Home</a>    
    </div>
    `)
})


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port} http://localhost:${port}`)
})


