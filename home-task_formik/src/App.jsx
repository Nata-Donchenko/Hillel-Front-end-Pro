import {Container, Row, Col} from 'react-bootstrap';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {useState} from 'react';
import './app.scss';

const App = () => {
  const [productsList, setProductsList] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  const removeProduct = (id) => {
    setProductsList(prev => prev.filter(product => product.id !== id));
  };

  const productStatus = (id, field) => {
    setProductsList(prev => prev.map (product =>
      product.id === id
        ? {...product, [field]: !product[field]}
        : product
    ));
  };

  return (
    <Container className='app-container'>
      <Row className='h-100 justify-content-center align-items-start'>
        <Col xs='12' md='10' lg='8' className='app-col'>
          
          <div className='form-section'>
            <ProductForm
              productsList={productsList}
              setProductsList={setProductsList}
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          </div>
          
          <div className='list-section'>
            <ProductList
              productsList={productsList}
              removeProduct={removeProduct}
              productStatus={productStatus}
              onEdit={setEditingProduct}
            />
          </div>
        
        </Col>
      </Row>
    </Container>
  );
};

export default App;
