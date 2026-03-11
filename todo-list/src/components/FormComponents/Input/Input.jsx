import {Form} from "react-bootstrap";

const Input = ({
  name,
  placeholder = 'Enter something',
  className,
  type = 'text',
  value,
  onChange
}) => {

  const InputComponent = () => {
    const propsInput = {name, value, placeholder, onChange};

    if (type !== 'textarea') {
      propsInput.type = type;
    } else {
      propsInput.as = 'textarea';
      propsInput.rows = 5;
    }

    return <Form.Control {...propsInput}/>;
  }

  return (
      <Form.Group className={className} controlId={'control' + name}>
        {InputComponent()}
      </Form.Group>
  );
};

export default Input;