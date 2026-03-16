import {Container, Row, Col} from "react-bootstrap";

import PostCatalog from "./components/PostCatalog";

const App = () => {

  return (
      <Container>
        <Row className="h-100 justify-content-center align-items-center">
          <Col xs="auto" className="text-center">
            <PostCatalog/>
          </Col>
        </Row>
      </Container>
  );
};

export default App;
