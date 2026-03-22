import {Container, Row, Col} from "react-bootstrap";
import MarkdownEditor from "./components/MarkdownEditor";

const App = () => {

  return (
      <Container>
        <Row className="h-100 justify-content-center align-items-center">
          <Col xs="auto" className="text-center">
            <MarkdownEditor onContentChange={console.log}/>
          </Col>
        </Row>
      </Container>
  );
};

export default App;
