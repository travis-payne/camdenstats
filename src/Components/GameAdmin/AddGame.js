import React, { useEffect, useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { createGame } from "../../graphql/mutations";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "../../css/AdminControlsGame.css";

const blankState = { team: "", against: "", date: "", live: false };

const AddGame = (props) => {
  const [form, setForm] = useState();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const game = { ...form };
      game.live = false;
      game.oppositionscore = 0;
      await API.graphql(graphqlOperation(createGame, { input: game }));
    } catch (err) {
      console.log("error creating Game:", err);
    }
    e.target.reset();
    props.props.onGameAdd();
    setForm(blankState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="gameForm">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Team</Form.Label>
            <Form.Select
              aria-label="Team"
              onChange={(e) => setField("team", e.target.value)}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Against:</Form.Label>
            <Form.Control
              type="against"
              placeholder="Enter opposition"
              onChange={(e) => setField("against", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <FormControl
              type="date"
              style={{ width: "100%" }}
              onChange={(e) => setField("date", e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Location:</Form.Label>
            <Form.Select onChange={(e) => setField("location", e.target.value)}>
              <option></option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddGame;
