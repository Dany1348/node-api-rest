console.log( " Por que hay algo y no mas bien nada?");

import express  from "express";
const app = express();

const PORT = 3000;

app.listen(PORT , ()=> {
    console.log( `Escuchando en http://localhost:${PORT}`);
})
const products =[
    {"id" :110 , "name":"Galaxy 5000" , "price": 3000},
    {"id" :220 , "name":"Nokia 2000" , "price": 2800},
    {"id" :310 , "name":"Tesla 500" , "price": 1500},
    {"id" :4 , "name":"Apple 1000" , "price": 8000}
    
    ]

app.get("/" , (req , res)=> {
    res.send ("<h1> Ahora arrancamos  con dev</h1>")
})

app.get("/products", (req,res)=>{
    res.json(products);
})
app.get("/products/:id", (req,res)=>{
    const product = products.find((item)=> item.id == req.params.id)
    res.json(product);
})