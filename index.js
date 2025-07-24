console.log( " Por que hay algo y no mas bien nada?");

import "dotenv/config";
import express  from "express";
import cors from "cors";
const app = express();

app.use(express.json());
//app.use(express.bodyParse());

app.get("/" , (req , res)=> {
    //res.send ("<h1> Ahora arrancamos  con dev</h1>")
    res.json({message : " Arrancamos con la API REST "})
});

import productsRouter from "./src/routes/products.router.js"
app.use("/api",productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth" ,authRouter);


app.use((req,res,next)=>{
    res.status(404).json({error : " Not found "});
});

const PORT =  process.env.PORT || 3001;

app.listen(PORT , ()=> {
    console.log( `Escuchando en http://localhost:${PORT}`);
});

    app.use(cors());
    app.use(express.json);






