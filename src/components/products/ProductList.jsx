import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import ProductCard from './ProductCard/ProductCard';
import { Container } from 'react-bootstrap';
import PaginationList from './Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    
    const {productList, loading} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        dispatch(getProducts())
    },[searchParams])
    const navigate = useNavigate()
    const filterByCategory = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };
    return (
        <div >
            <Container>
                <button onClick={() => filterByCategory("category", "pizza")}>pizza</button>
                <button onClick={() => filterByCategory("category", "jason_born")}>all</button>
            </Container>
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