import { Spinner, Container } from "react-bootstrap";

const Loader = () => {
  return (
    <Container className="text-center mt-5">
      <Spinner animation="border" />
    </Container>
  );
};

export default Loader;