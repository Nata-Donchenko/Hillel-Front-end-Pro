import { Alert, Container } from "react-bootstrap";

const ErrorMessage = ({ message }) => {
  return (
    <Container className="mt-3">
      <Alert variant="danger">
        {message}
      </Alert>
    </Container>
  );
};

export default ErrorMessage;