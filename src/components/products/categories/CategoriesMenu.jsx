import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../store/actions/productActions';
import { Button, Form } from 'react-bootstrap';

function CategoriesMenu() {
    const {categories} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>slug</th>
          <th>Название категории</th>
          <th>Смена названия</th>
          <th>Удалить категорию</th>
        </tr>
      </thead>
      <tbody>
        {
            categories.map((item) => (
                <tr>
                    <td>#{item.slug}</td>
                    <td>{item.name}</td>
                    <td><Form.Control/></td>
                    <td><Button>Delete</Button></td>
                </tr>
            ))
        }
      </tbody>
    </Table>
  );
}

export default CategoriesMenu;