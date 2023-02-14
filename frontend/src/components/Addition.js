import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import api from "../api";
const App = () => {
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);
  const [clientResult, setClientResult] = useState(0);
  const [serverResult, setServerResult] = useState(0);


  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };
  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };
  const handleSubmitClick = async () => {
    setClientResult(Number(num1) + Number(num2));
    const data = {
      num1: Number(num1),
      num2: Number(num2)
    }
    const result = await api.post("api/addition", data);
    console.log(result.data)
    setServerResult(result.data.result)

  };
  return (
    <Container>   
      <Row>
        <Col md={6}>
          <Form.Label>Enter first number:</Form.Label>
          <Form.Control
            type="number"
            value={num1}
            onChange={handleNumber1Change}
          />
        </Col>

        <Col md={6}>
          <Form.Label>Enter second number:</Form.Label>
          <Form.Control
            type="number"
            value={num2}
            onChange={handleNumber2Change}
          />
        </Col>
        <br></br>
        <br></br>

        <Col md={12}>

          <Button variant="primary" onClick={handleSubmitClick}>
            Submit
          </Button>

        </Col>
        <Col md={12}>
          <Form.Label>Your Addition Result (from server) is:{serverResult}</Form.Label>
        </Col>
        <Col md={12}>
          <Form.Label>Your Addition Result (from ReactJS) is:{clientResult}</Form.Label>
        </Col>
      </Row>

    </Container>
  );
};

export default App;
