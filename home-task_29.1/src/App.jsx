import {Container, Row, Col, ButtonGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";

import LogsList from "./components/LogsList";
import useLogs from "./components/useLogs";

const App = () => {

  const { logsList, increment, decrement, deleteLog } = useLogs()

  return (
      <Container>
        <Row className="h-100 justify-content-center align-items-center">
          <Col xs="auto" className="text-center">

             <ButtonGroup aria-label='Basic example' >
               <Button
                 type="button"
                 onClick={increment}
                 variant="outline-success"
                 size="lg"
               >
                 +
               </Button>

               <Button
                 type="button"
                 onClick={decrement}
                 variant="outline-danger"
                 size="lg"
               >
                 -
               </Button>
             </ButtonGroup>

            <LogsList logsList={logsList} onClick={deleteLog} />

          </Col>
        </Row>
      </Container>
  );
};

export default App;
