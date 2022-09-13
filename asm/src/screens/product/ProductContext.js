import React, { useState, createContext } from 'react';
import { getProduct, getFavorit, addFavorit } from './ProductService';
import { getProductById } from './ProductService';




export const ProductContext = createContext();

export const ProductContextProvider = (props) => {

    const { children } = props;
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    const onGetProducts = async () => {
        try {
            const res = await getProduct();
            setProducts(res);
            console.log()
            // return res;
        } catch (error) {
            console.log('ProductContext onGetProducts error: ', error);
        }

        return products;
    }

    const onGetProductById = async (id) => {
        try {
            const res = await getProductById(id);
            console.log("ProductContext >>>> Id res : ", res);
            setProduct(res);
            console.log("ProductContext >>>> Id product : ", product);
        } catch (error) {
            console.log('ProductContext onGetProductById error', error);
        }
    }

    const onGetFavorit = async (user_id) => {
        try {
            const res = await getFavorit(user_id);
            console.log("ProductContext >>>> Id res : ", res);
            return res;
        } catch (error) {
            console.log('ProductContext onGetProductById error', error);
        }
    }


    return (
        <ProductContext.Provider
            value={{
                product, products, onGetProducts, onGetProductById, 
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};