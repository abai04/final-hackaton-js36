import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getCategories } from '../../../store/actions/productActions';
import { Button, Container, Form } from 'react-bootstrap';
import EditCategory from './EditCategory';

function CategoriesMenu() {
    const {categories} = useSelector((state) => state.product)
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const handleAdd = () => {
        if(!category){
            alert("Заполните поле!")
            return
        }
        const newCategory = {name: category}
        dispatch(addCategory(newCategory))
        dispatch(getCategories())
    }
  return (
    <Table style={{width: "70%", margin: "auto"}} striped bordered hover>
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
                    <td><EditCategory item={item}/></td>
                    <td><Button onClick={() => dispatch(deleteCategory(item.slug))}>Delete</Button></td>
                </tr>
            ))
        }
      </tbody>
      <h3>Добавьте новую категорию</h3>
      <div className='d-flex'>
      <Form.Control onChange={(e) => setCategory(e.target.value)} placeholder="добавить категорию"/>
      <Button onClick={handleAdd}>Добавить</Button>
      </div>
    </Table>
  );
}

export default CategoriesMenu;