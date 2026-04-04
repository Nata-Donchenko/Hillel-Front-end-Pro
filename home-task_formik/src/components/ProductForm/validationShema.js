import * as Yup from 'yup';

const validationShema = Yup.object().shape({
  title: Yup
    .string()
    .required()
    .min(2),

  description: Yup
    .string()
    .required('description is a required field')
    .min(2)
    .max(200),

  price: Yup
    .number()
    .required()
    .min(1, 'Price cannot be 0'),

  discountedPrice: Yup
    .number()
    .required('discount is a required field')
    .min(1, 'Discounted price cannot be 0')
    .when('price', (price, schema) =>
      price
        ? schema.max(price, 'Discounted price cannot be greater than price')
        : schema
    ),

  category: Yup
    .string()
    .required()
    .notOneOf([''], 'Please select a category'),

  brand: Yup
    .string()
    .required()
    .min(2),

  article: Yup
    .string()
    .required()
    .length(5, 'Article must be exactly 5 characters'),

  quantityInStock: Yup
    .number()
    .required('quantity is a required field')
    .min(0),

  mainImgUrl: Yup
    .string()
    .required()
    .url('Must be a valid URL')
    .matches(/\.(jpg|jpeg|png|webp|gif)$/i, 'URL must point to an image'),
  
  images: Yup.string()
    .test(
      'is-valid-urls',
      'Enter links separated by commas',
      value => {
        if (!value) return true;
        return value
          .split(',')
          .every(url => url.trim().startsWith('http'));
      }
    ),
  
  isActive: Yup
    .boolean()
    .required(),

  isAvailability: Yup
    .boolean()
    .required(),

  isShowMain: Yup
    .boolean()
    .required(),
})

export default validationShema