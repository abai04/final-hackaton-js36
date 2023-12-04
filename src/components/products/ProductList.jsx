import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import ProductCard from './ProductCard/ProductCard';
import { Container } from 'react-bootstrap';

const ProductList = () => {
    const {productList, loading} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    },[])
    return (
        <Container>
            {productList.map((item) => <ProductCard key={item.id} item={item}/>)}
        </Container>
    );
};

export default ProductList;