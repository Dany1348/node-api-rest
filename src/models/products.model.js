import { db } from "./firebase.js";

import { collection , getDoc, getDocs ,doc, addDoc, deleteDoc, setDoc } from "firebase/firestore";

const productsCollection = collection(db , "products");


export const getAllProducts = async ()=>{
    try{
        
        
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(products);
            return products;

    }catch(error) {

console.error(error);
    }

    
};

export const getProductById = async (id) => {

    try{
        const docRef = doc(productsCollection , id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            return { id: docSnap.id , ...docSnap.data()};
        }else{
            return null;
        }
    }catch (error){
        console.log(error);
    }

}

// Método para guardar un producto en Firestore
export async function saveProduct( product ) {
await addDoc(productsCollection, product );
};

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    console.log(data);
    
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};


export async function updateProduct(id, productData) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData); // reemplazo completo
    return { id, ...productData };
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};
