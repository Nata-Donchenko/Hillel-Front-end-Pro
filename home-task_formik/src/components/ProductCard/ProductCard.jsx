import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, ListGroup } from 'react-bootstrap';

const ProductCard = ({
  product,
  productStatus,
  removeProduct,
  onEdit
}) => {
  
  return (
    <Card className='shadow-sm h-100 custom-card'>
      
      <Card.Img
        variant='top'
        src={product.mainImgUrl}
        style={{ height: '150px', objectFit: 'cover' }}
      />
      
      <Card.Body className='p-2'>
        <Card.Title className='mb-1'>{product.title}</Card.Title>
        <Card.Text className='small text-muted'>
          {product.description}
        </Card.Text>
      </Card.Body>
      
      <ListGroup className='list-group-flush small'>
        
        <ListGroup.Item style={{ minHeight: '48px' }}>
          <div className='d-flex gap-1 flex-wrap'>
            {Array.isArray(product.images) && product.images.length > 0
              ? product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt='extra'
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    border: '1px solid #ddd'
                  }}
                />
              ))
              : <span className='text-muted small'>No images</span>
            }
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item>Article: {product.article}</ListGroup.Item>
        <ListGroup.Item>Quantity: {product.quantityInStock}</ListGroup.Item>
        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
        <ListGroup.Item>Discount: {product.discountedPrice}</ListGroup.Item>
        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
        
        <ListGroup.Item>
          <Button
            size='sm'
            variant={product.isActive ? 'success' : 'secondary'}
            onClick={() => productStatus(product.id, 'isActive')}
          >
            {product.isActive ? 'Active' : 'Inactive'}
          </Button>
        </ListGroup.Item>
        
        <ListGroup.Item>
          <Button
            size='sm'
            variant={product.isAvailability ? 'success' : 'secondary'}
            onClick={() => productStatus(product.id, 'isAvailability')}
          >
            {product.isAvailability ? 'Available' : 'Not available'}
          </Button>
        </ListGroup.Item>
        
        <ListGroup.Item>
          <Button
            size='sm'
            variant={product.isShowMain ? 'success' : 'secondary'}
            onClick={() => productStatus(product.id, 'isShowMain')}
          >
            {product.isShowMain ? 'On main' : 'Hidden'}
          </Button>
        </ListGroup.Item>
      
      </ListGroup>
      
      <Card.Body className='d-flex gap-2'>
        
        <Button
          size='sm'
          variant='primary'
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>
        
        <Button
          size='sm'
          variant='danger'
          onClick={() => removeProduct(product.id)}
        >
          Delete
        </Button>
      
      </Card.Body>
    
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    mainImgUrl: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    article: PropTypes.string,
    quantityInStock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discountedPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
    brand: PropTypes.string,
    isActive: PropTypes.bool,
    isAvailability: PropTypes.bool,
    isShowMain: PropTypes.bool,
  }).isRequired,
  
  productStatus: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProductCard;