import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {SetProducts} from '../redux/actions/productActions'

function ProductListing() {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error)=>{
            console.log("Error", error);
        });
        dispatch(SetProducts(response.data));
    }
    
    useEffect(()=>{
        fetchProducts();
    }, []);
    console.log(products)
  return (
    <div className='ui container grid'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing