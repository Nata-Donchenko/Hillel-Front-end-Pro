import TodoForm from './components/TodoForm';
import {Col, Container, Row} from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <TodoForm/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
