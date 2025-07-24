import { Router } from "express";

const router = Router();

const products =[
    {"id" :110 , "name":"Galaxy 5000" , "price": 3000},
    {"id" :220 , "name":"Nokia 2000" , "price": 2800},
    {"id" :310 , "name":"Tesla 500" , "price": 1500},
    {"id" :4 , "name":"Apple 1000" , "price": 8000}
    
    ];

    import { getAllProducts ,
            searchProduct,
            getProductById,
            createProduct,
            updateProduct,
            deleteProduct,
            saveProduct
        }
        
     from "../controllers/products.controller.js";
        
     import {auth} from "../middlewares/auth.middleware.js";


    router.get("/products", getAllProducts);
    router.get("/products/search" ,searchProduct );
    router.get("/products/:id", getProductById);
    router.post("/products",auth, createProduct);
    router.put("/products/:id", updateProduct);
    router.delete("/products/:id",deleteProduct);

export default router;