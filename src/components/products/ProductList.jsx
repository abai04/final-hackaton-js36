import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import ProductCard from './ProductCard/ProductCard';
import { Container } from 'react-bootstrap';
import PaginationList from './Pagination';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const {productList, loading} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        dispatch(getProducts())
    },[searchParams])
    return (
        <div >

        <Container style={{display: 'flex', flexWrap: 'wrap'}}>
            {productList.map((item) => <ProductCard key={item.id} item={item}/>)}
        </Container>
    <Container>
            <PaginationList/>
    </Container>

        </div>
    );
};

export default ProductList;