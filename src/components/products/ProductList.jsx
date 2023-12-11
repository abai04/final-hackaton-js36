import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../store/actions/productActions";
import ProductCard from "./ProductCard/ProductCard";
import { Container, Dropdown, NavDropdown } from "react-bootstrap";
import PaginationList from "./Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { productList, loading, categories } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [searchParams]);
  const navigate = useNavigate();
  const filterByCategory = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };
  return (
    <div>
      <Dropdown style={{ marginLeft: "150px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Категория
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => filterByCategory("category", "all")}>
            Все
          </Dropdown.Item>
          {categories.map((item) => (
            <Dropdown.Item
              onClick={() => filterByCategory("category", item.slug)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {productList.length === 0 ? (
          <h1>Продуктов этой категории на данный момент нет</h1>
        ) : null}
        {productList.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Container>
      <Container>
        <PaginationList />
      </Container>
    </div>
  );
};

export default ProductList;
