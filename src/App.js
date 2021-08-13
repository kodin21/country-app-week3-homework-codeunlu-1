import "./App.css";
import Country from "./components/Country";
import Statistics from "./components/Statistics";
import { useState } from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

function App() {
  const [selectedTab, setSelectedTab] = useState("country");

  return (
    <div className="App">
      <Container>
        <Row style={{padding: '1rem 0'}}>
          <Col sm={6}>
            <Button variant="primary" onClick={() => setSelectedTab("country")}>Ülke Listesi</Button>
          </Col>
          <Col sm={6}>
          <Button variant="success" onClick={() => setSelectedTab("statistics")}>Istatistikler</Button>
          </Col>

        </Row>

          {
            (() => {
              return selectedTab === "country" ? <Country/> : <Statistics/>
            })()
          }
      </Container>
    </div>
  );
}

export default App;
