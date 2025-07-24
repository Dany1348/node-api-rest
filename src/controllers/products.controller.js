const products =[
    {"id" :110 , "name":"Galaxy 5000" , "price": 3000},
    {"id" :220 , "name":"Nokia 2000" , "price": 2800},
    {"id" :310 , "name":"Tesla 500" , "price": 1500},
    {"id" :4 , "name":"Apple 1000" , "price": 8000},
    {"name":"Galaxy 5000" , "price": 3000 , "categories" : "Cellphone" },
    {"name":"Nokia 2000" , "price": 2800 , "categories" : "Cellphone" },
    {"name":"Tesla 500" , "price": 35000 , "categories" : "Autocar" },
    {"name":"Apple 1000" , "price": 8000 , "categories" : "Computer" }

    ];

import * as model from "../models/products.model.js";

export const getAllProducts = async(req,res)=>{
   //return await model.getAllProducts();
   const products = await model.getAllProducts();
   res.json(products);
};

export const getProductById = async (req,res)=>{
    const {id} = req.params;
    //const product = products.find((item)=> item.id == req.params.id)
    const product = await model.getProductById(id);

    if(product){
            res.json(product);
        
    }else{
        res.status(404).json({error : "el producto no existe"});
    }
    
};
export const saveProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const newProduct = await model.saveProduct({ name, price, categories });
    console.log(newProduct);
    
  res.status(201).json(newProduct);
};

export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const newProduct = await model.createProduct({ name, price, categories });
    console.log(newProduct);
    
  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const product = await model.deleteProduct(productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};

export const searchProduct = async (req, res) => {
  const { name } = req.query;

  const products = await model.getAllProducts();
  console.log("Esto viene del model", products);
  
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const updateProduct =(req,res)=>{
    const productId = parseInt(req.params.id ,10);
    const productIndex = products.findIndex((item) => item.id = productId);

        if(productIndex === -1){
          return  res.status(404).json({error : "Producto  no encontrado "});
        }
    const {name ,price ,categories} = req.body;
    products[productIndex]= {id : productId ,  name , price ,categories};

    res.json(products[productIndex]);
};

/*
export const searchProduct = (req,res)=>{
    const {name }= req.query;
    console.log(req.query);
    //const filtered = products.filter((item)=> item.name.toLowerCase().includes(nombre.toLowerCase()));
    const filtered = products.filter((item)=> item.name.includes(name));
    
    res.json(filtered);

};

export const createProduct = (req,res)=>{
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
};

export const updateProduct =(req,res)=>{
    const productId = parseInt(req.params.id ,10);
    const productIndex = products.findIndex((item) => item.id = productId);

        if(productIndex === -1){
          return  res.status(404).json({error : "Producto  no encontrado "});
        }
    const {name ,price } = req.body;
    products[productIndex]= {id : productId ,  name , price};

    res.json(products[productIndex]);
};

export const deleteProduct =  (req,res)=>{
    const productId = parseInt(req.params.id ,10);
    const productIndex = products.findIndex((item) => item.id = productId);

        if(productIndex === -1){
          return  res.status(404).json({error : "Producto  no encontrado "});
        }
    products.splice(productIndex , 1);
    res.status(204).send();
};*/

