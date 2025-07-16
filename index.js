console.log( " Por que hay algo y no mas bien nada?");

import express  from "express";
import cors from "cors";
const app = express();

const PORT = 3000;

app.listen(PORT , ()=> {
    console.log( `Escuchando en http://localhost:${PORT}`);
});
const products =[
    {"id" :110 , "name":"Galaxy 5000" , "price": 3000},
    {"id" :220 , "name":"Nokia 2000" , "price": 2800},
    {"id" :310 , "name":"Tesla 500" , "price": 1500},
    {"id" :4 , "name":"Apple 1000" , "price": 8000}
    
    ]
    app.use(cors());
    app.use(express.json);

app.get("/" , (req , res)=> {
    res.send ("<h1> Ahora arrancamos  con dev</h1>")
});

app.get("/products", (req,res)=>{
    res.json(products);
});

app.get("/products/search" , (req,res)=>{
    const {nombre }= req.query;
    const filtered = products.filter((item)=> item.name.toLowerCase().includes(nombre.toLowerCase()));
    res.json(filtered);

});

app.get("/products/:id", (req,res)=>{
    const product = products.find((item)=> item.id == req.params.id)
    if(!product){
        res.status(404).json({error : "el producto no existe"});
    }
    res.json(product);
});
app.post("/products", (req,res)=>{
    //console.log(req.body);

    const {name ,price} =req.body;

    const newProduct = {
        id : products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
    //res.send("POST");
});

app.put("/products/:id", (req,res)=>{
    const productId = parseInt(req.params.id ,10);
    const productIndex = products.findIndex((item) => item.id = productId);

        if(productIndex === -1){
          return  res.status(404).json({error : "Producto  no encontrado "});
        }
    const {name ,price } = req.body;
    products[productIndex]= {id : productId ,  name , price};

    res.json(products[productIndex]);
});
app.delete("/products/:id", (req,res)=>{
    const productId = parseInt(req.params.id ,10);
    const productIndex = products.findIndex((item) => item.id = productId);

        if(productIndex === -1){
          return  res.status(404).json({error : "Producto  no encontrado "});
        }
    products.splice(productIndex , 1);
    res.status(204).send();
});


app.use((req,res,next)=>{
    res.status(404).json({error : " Not found "});
});