import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import initialValues from './initialValues.js';
import validationShema from './validationShema.js';
import categoriesData from '../data/categoriesData';

const ProductForm = ({
  setProductsList,
  editingProduct,
  setEditingProduct
}) => {
  
  const formik = useFormik({
    initialValues: editingProduct
      ? {
        ...initialValues,
        ...editingProduct,
        images: Array.isArray(editingProduct.images)
          ? editingProduct.images.join(', ')
          : ''
      }
      : initialValues,
    
    enableReinitialize: true,
    validationSchema: validationShema,
    
    onSubmit: (values, { resetForm }) => {
      
      const formattedProduct = {
        ...values,
        id: editingProduct ? editingProduct.id : Date.now(),
        images: values.images
          ? values.images.split(',').map(i => i.trim()).filter(Boolean)
          : [],
      };
      
      if (editingProduct) {
        setProductsList(prev =>
          prev.map(p =>
            p.id === editingProduct.id ? formattedProduct : p
          )
        );
      } else {
        setProductsList(prev => [...prev, formattedProduct]);
      }
      
      resetForm();
      setEditingProduct(null);
    }
  });
  
  const field = (name, type = 'text') => ({
    name,
    type,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    isInvalid: formik.touched[name] && !!formik.errors[name]
  });
  
  return (
    <Container className='border p-4 rounded shadow-sm bg-white'>
      <Form onSubmit={formik.handleSubmit}>
    
        <Row className='mb-3'>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...field('title')}
                placeholder='Enter title'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.title}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                {...field('brand')}
                placeholder='Enter brand'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.brand}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        
        </Row>
        
        <Row className='mb-3'>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                {...field('category')}
              >
                <option value=''>Select category</option>
                {categoriesData.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.category}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Article</Form.Label>
              <Form.Control
                {...field('article')}
                placeholder='Enter an article'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.article}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        
        </Row>
        
        <Row className='mb-3'>
          
          <Col md={4}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                {...field('price', 'number')}
                min='0'
                placeholder='0'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.price}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={4}>
            <Form.Group>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                {...field('discountedPrice', 'number')}
                min='0'
                placeholder='0'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.discountedPrice}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={4}>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                {...field('quantityInStock', 'number')}
                min='0'
                placeholder='0'
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.quantityInStock}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        
        </Row>
        
        <Row className='mb-3'>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              
              <Form.Control
                as='textarea'
                name='description'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter a description'
              />
              
              {formik.touched.description && formik.errors.description && (
                <div className='text-danger'>
                  {formik.errors.description}
                </div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Main Image URL</Form.Label>
              
              <Form.Control
                type='text'
                name='mainImgUrl'
                value={formik.values.mainImgUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='https://...'
              />
              
              {formik.touched.mainImgUrl && formik.errors.mainImgUrl && (
                <div className='text-danger'>
                  {formik.errors.mainImgUrl}
                </div>
              )}
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group>
              <Form.Label>Other images</Form.Label>
              
              <Form.Control
                type='text'
                name='images'
                value={formik.values.images}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='https://..., https://...'
              />
              
              {formik.touched.images && formik.errors.images && (
                <div className='text-danger'>
                  {formik.errors.images}
                </div>
              )}
            </Form.Group>
          </Col>
        
        </Row>
        
        <Row className='mb-3'>
          
          <Col md={4}>
            <Form.Check
              label='Is active'
              name='isActive'
              checked={formik.values.isActive}
              onChange={(e) =>
                formik.setFieldValue('isActive', e.target.checked)
              }
            />
          </Col>
          
          <Col md={4}>
            <Form.Check
              label='Is availability'
              name='isAvailability'
              checked={formik.values.isAvailability}
              onChange={(e) =>
                formik.setFieldValue('isAvailability', e.target.checked)
              }
            />
          </Col>
          
          <Col md={4}>
            <Form.Check
              label='Show on main'
              name='isShowMain'
              checked={formik.values.isShowMain}
              onChange={(e) =>
                formik.setFieldValue('isShowMain', e.target.checked)
              }
            />
          </Col>
        
        </Row>

        <div className='d-flex gap-2'>
          <Button type='submit'>Save</Button>
          
          <Button
            type='button'
            variant='secondary'
            onClick={() => {
              formik.resetForm();
              setEditingProduct(null);
            }}
          >
            Reset
          </Button>
        </div>
      
      </Form>
    </Container>
  );
};

export default ProductForm;