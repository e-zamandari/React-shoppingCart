import React, {useContext , useEffect, useState} from 'react';
import { Link , useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/api';
// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const params = useParams();
    const data = useContext(ProductsContext);
    const [product , setProducts] = useState(data)
    useEffect(()=>{
        const id = params.id
        const fetchAPI = async ()=>{
            setProducts(await(getSingleProduct(id)))
        }
        
        fetchAPI();
    } , [params.id])
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;