import ProductCard from '../ProductCard';

const ProductList = ({
  productsList,
  removeProduct,
  productStatus,
  onEdit
}) => {
  
  return (
    <div className='row g-3'>
      {productsList.map(product => (
        <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <ProductCard
            product={product}
            removeProduct={removeProduct}
            productStatus={productStatus}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;