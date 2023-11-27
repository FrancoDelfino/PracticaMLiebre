const express = require("express");
const mainRoutes = require("./routers/main.route.js")
const app = express();
const port = process.env.PORT || 3001
const publicPath = path.resolve(__dirname, "public")


app.use(express.static(publicPath))


app.use("/", mainRoutes);


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


